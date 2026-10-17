
function largestNum(arr){
  let high=arr[0]
for(let i=1;i<arr.length;i++){
  if(arr[i]>high){
    high=arr[i]
  }
}

  return high;
}

console.log(largestNum([343,24,22,22,-10,101]))