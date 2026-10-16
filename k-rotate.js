function leftRotate(arr, d) {
let n =arr.length;
d=d%n;
for (let r=0;r<d;r++){
    let first=arr[0];
  for(let i=0;i<n-1;i++){
    arr[i]=arr[i+1];
    
  }
  arr[n-1]=first
  
}

  return arr;

}
const  arr=[1,2,3,4,5];
console.log(leftRotate(arr, 2))



function rightRotate(arr,k)
{
let n=arr.length;
  k=k%n;
  for(let r=0;r<k;r++){
    let last=arr[n-1];
    for(let i=n-1;i>0;i--){
      arr[i]=arr[i-1];
      
    }
    arr[0]=last
  }
  return arr

  
}
const  arry=[1,2,3,4,5];
console.log(rightRotate(arry, 2))


