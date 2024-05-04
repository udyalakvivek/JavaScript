// Qs.1 How do you combine two arrays in JavaScript?
let arr1=[1,2,3,4];
let arr2=[5,6,7,8,9]
// Using concat method

let mergeArr=arr1.concat(arr2)
console.log("Merge Array using concat :",mergeArr);

// using Spread operator 

let mergeArr2=[...arr1,...arr2];
console.log("Merge using spread operator :", mergeArr2);