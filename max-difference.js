function maxDifference(arr) {
    let maxDiff = arr[1] - arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let diff = arr[j] - arr[i];

            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }

    return maxDiff;
}

const arr = [2, 3, 10, 6, 4, 8, 1];
function maxDifference(arr) {
    if (arr.length < 2) return null;

    let minElement = arr[0];
    let maxDiff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - minElement);
        minElement = Math.min(minElement, arr[i]);
    }

    return maxDiff;
}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // 8
console.log(maxDifference(arr)); // 8