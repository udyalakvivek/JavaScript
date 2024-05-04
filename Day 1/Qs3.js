// Qs.3 How do you sort an array in JavaScript?
  let arr= [10,2,5,6,8,9,2,1,4]
  console.log("Unsort array = :", arr);
  let sortArr =arr.sort()
//   console.log("Sort Array : ",sortArr);// it is sort as a string not a numeric number 

// Sort in ascending order
let sortArrAsc = arr.sort((a, b) => {
  return a - b;
});
console.log(sortArrAsc); // Outputs: [1, 2, 2, 4, 5, 6, 8, 9, 10]
// Sort in descending order
let sortArrDesc = arr.sort((a, b) => {
  return b - a;
});
console.log(sortArrDesc); // Outputs: [10, 9, 8, 6, 5, 4, 2, 2, 1]

