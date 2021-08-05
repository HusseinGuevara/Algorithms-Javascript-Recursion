/*
Given an array nested with unknown amount of arrays,
return the integers all under ONE array.
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const expected1 = [1, 2, 3, 4, 5, 6];

const arr2 = [1, 2, [4, 5], 6];
const expected2 = [1, 2, 4, 5, 6];

const arr3 = [1, 2, [3, 4, [5]], 6];
const expected3 = [1, 2, 3, 4, 5, 6];

/* 
Two useful built in functions:
Array.isArray() : returns true if argument is an array
    - Array.isArray([1, 2, 3]) => true
    - Array.isArray([4, 5, 6]) => true
    - Array.isArray(1) => false

Array.concat() : concatenates two arrays together
    - arr1.concat(arr2) => [1, 2, 3, 4, 5, 6, 1, 2, [4, 5], 6]
*/

function recursiveFlatten(arr) {
    var returnArr = [];

    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            returnArr = returnArr.concat(recursiveFlatten(arr[i]))
        } else {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}
console.log(recursiveFlatten(arr1));
console.log(recursiveFlatten(arr2));
console.log(recursiveFlatten(arr3));