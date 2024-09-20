const arr = [1, 2, 3, 4, 5];
// challenge 1
arr.push(6);
arr.reverse();
arr.push(0);
console.log(arr);

// challenege 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
var arr3 = arr1.concat(arr2.splice(1, 5));
console.log(arr3);