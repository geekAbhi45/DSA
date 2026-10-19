function duplicates(arr){
  const res=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
      res.push(arr[i])
    }
  }
  return res
}
const arr=[10,12,14,16,16,25];


console.log(duplicates(arr))
