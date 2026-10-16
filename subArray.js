function longestSubArray(arr,k){
  let maxlength=0;
  for(let i=0;arr.length;i++){
    let sum=0;
    for(let j=i;j<arr.length;j++){
      sum=sum+arr[j]
      if(sum===k){
        let length=j-i+1;
        if(length>maxlength){
          maxlength=length;
        }
      }
    }
  }
  return maxlength;
}


console.log(longestSubArray([2,3,2,13,3],18))