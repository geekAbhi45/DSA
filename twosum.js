
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === difference) {
        return [i, j];
      }
    }
  }

  return -1;
}

console.log(twoSum([2, 7, 11, 15], 17));

//optimal solution
function twoSumOP(arr,target){
const map=new Map();
  for (let i=0;i<arr.length;i++){
       const difference = target - arr[i];
    if(map.has(difference)){
      return[map.get(difference),i]
    }
    else map.set(arr[i],i)

  }
  return -1
}

console.log(twoSumOP([2, 7, 11, 15], 9))

