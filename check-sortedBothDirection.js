function isSortedBothDirections(arr) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
        }
        if (arr[i] > arr[i + 1]) {
            isAscending = false;
        }
    }

    return isAscending || isDescending;
}

console.log(isSortedBothDirections([1, 2, 3, 4])); // true
console.log(isSortedBothDirections([4, 3, 2, 1])); // true
console.log(isSortedBothDirections([1, 3, 2, 4])); // false