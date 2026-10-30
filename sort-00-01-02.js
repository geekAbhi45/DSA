
function sort012(arr) {
    let a0 = 0;
    let a1 = 0;
    let a2 = 0;

    let length = arr.length;

    // Count 0s, 1s and 2s
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            a0++;
        }

        //naive approach
        
        else if (arr[i] === 1) {
            a1++;
        }
        else if (arr[i] === 2) {
            a2++;
        }
    }

    // Fill 0s
    for (let i = 0; i < a0; i++) {
        arr[i] = 0;
    }

    // Fill 1s
    for (let i = a0; i < a0 + a1; i++) {
        arr[i] = 1;
    }

    // Fill 2s
    for (let i = a0 + a1; i < length; i++) {
        arr[i] = 2;
    }

    return arr;
}

const arr = [0, 1, 2, 0, 1, 2, 0, 1, 2];

console.log(sort012(arr));


//optimal approach
//Three-Pointer Approach (Dutch National Flag Algorithm) with
function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {

        if (arr[mid] === 0) {
            // Swap 0 to the left
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            low++;
            mid++;
        }

        else if (arr[mid] === 1) {
            // 1 is already in the correct region
            mid++;
        }

        else if (arr[mid] === 2) {
            // Swap 2 to the right
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;

            high--;
        }
    }

    return arr;
}

let arr2 = [2, 0, 2, 1, 1, 0];

console.log(sortArray(arr2));
 
