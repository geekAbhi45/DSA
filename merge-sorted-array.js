function mergeUnique(arr1, arr2) {

    let i = 0;
    let j = 0;

    let result = [];

    while (i < arr1.length && j < arr2.length) {

        let value;

        if (arr1[i] < arr2[j]) {
            value = arr1[i];
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            value = arr2[j];
            j++;
        }
        else {
            value = arr1[i];
            i++;
            j++;
        }

        // Avoid inserting duplicate values
        if (result.length === 0 ||
            result[result.length - 1] !== value) {

            result.push(value);
        }
    }

    // Add remaining elements from first array
    while (i < arr1.length) {
        if (result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }

    // Add remaining elements from second array
    while (j < arr2.length) {
        if (result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}

console.log(
    mergeUnique([1, 2, 3, 4, 5], [2, 3, 4, 6, 7])
);