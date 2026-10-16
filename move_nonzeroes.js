function moveNonZero(arr){
  let j=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[j]=arr[i];
      j++;
    }
   
  }
   while(j<arr.length){
      arr[j]=0;
      j++
    }
  return arr
}

console.log(moveNonZero([2,0,22,0,0,8,9]))