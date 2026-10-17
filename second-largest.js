function secondLargest(arr){
  let highest = -Infinity;
    let second = -Infinity;
for(let i=0;i<arr.length;i++){
  if(arr[i]>highest){
    second=highest;
    highest=arr[i]
  }
  else if(arr[i]>second && arr[i]<highest){
    second=arr[i]
  }
  }

  return second=== -Infinity ? undefined :second
}



 


console.log(secondLargest([343,24,22,22,-10,101]))