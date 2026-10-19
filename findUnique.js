//find element that appears only once in an array

//brute force approach
function findSingles(arr){
  
  for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        count++
      }
    }
    if(count==1){
      return arr[i]
    }
    
  }
 return -1
}
console.log(findSingles([2,7,4,5,5,4,2,6,7]));


//hashing approach
function singleNumber(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of arr) {
        if (freq[num] === 1) {
            return num;
        }
    }
}

console.log(singleNumber([2, 3, 5, 4, 5, 3, 4])); // 2 
//order of time complexity is O(n) and space complexity is O(n)