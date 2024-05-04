// "How can we search for a specific digit in an array, delete it if found, and display its index?

let arr = [1, 2, 3, 4, 5];
let digitToDelete = 3; // The digit you want to delete

let index = arr.indexOf(digitToDelete); // Find the index of the digit
// if (index >= 0)
if (index !== -1) { // If digit is found
    console.log(`Found ${digitToDelete} at index ${index}`);
    arr.splice(index, 1); // Remove the digit at the found index
} else {
    console.log(`${digitToDelete} not found in the array`);
}

console.log(arr); // Outputs the updated array after deletion
