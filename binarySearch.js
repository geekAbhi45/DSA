// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

function binarySearch(arr,target){
  let left=0;
  let right=arr.length-1;
 

  while(left<right){
     let mid=Math.floor((left+right)/2)
    if(arr[mid] === target){
     return mid;  
    }
    if(target>arr[mid]){
      left=mid+1
    }
    else{
      right=mid-1
    }
  }
  return -1
}

console.log(binarySearch([10,20,230,300,890,891],890));