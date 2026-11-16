//Pass by  value

let a=10;
let b=a;
console.log(a); // 10
console.log(b); // 10
console.log(a === b); // true
console.log(b + 1); // 11


//pass by reference
 
let c=[2, 3, 4];

let d=c;
d.push(5);
console.log(c); // [2, 3, 4, 5]
console.log(d); // [2, 3, 4, 5]
console.log(c === d); // true
console.log(c== d); // true


