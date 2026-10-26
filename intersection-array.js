// CLIENT SIDE

async function uploadVideo(file) {
    // 1. Ask backend to initiate S3 multipart upload
    const { uploadId, partUrls, objectKey } =
        await api.createMultipartUpload({
            fileName: file.name,
            fileSize: file.size
        });

    const CHUNK_SIZE = 10 * 1024 * 1024; // 10 MB
    const MAX_PARALLEL = 4;
    const MAX_RETRIES = 3;

    const chunks = splitIntoChunks(file, CHUNK_SIZE);
    const uploadedParts = [];

    // 2. Upload chunks concurrently, with a concurrency limit
    await runWithConcurrency(chunks, MAX_PARALLEL,
        async (chunk, index) => {
            const partNumber = index + 1;

            const url = await api.getPartUrl({
                uploadId,
                objectKey,
                partNumber
            });

            const result = await retry(
                () => uploadChunk(url, chunk),
                MAX_RETRIES
            );

            uploadedParts[index] = {
                PartNumber: partNumber,
                ETag: result.etag
            };
        }
    );

    // 3. Complete only after every chunk succeeds
    await api.completeMultipartUpload({
        uploadId,
        objectKey,
        parts: uploadedParts
    });

    return "Upload completed";
}