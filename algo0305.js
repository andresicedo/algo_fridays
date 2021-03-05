/*
1.Write a JavaScript function to check whether an input is an array or not.
*/
// let inputOne = {
//     "one": 1,
//     "two": 2
// }

// let inputTwo = [1,2];

// function isIt(input) {
//     return Array.isArray(input);
// }
// console.log(isIt(inputOne));//false
// console.log(isIt(inputTwo));//true


/*
2.Write a JavaScript function to get the first 'n' elements of an array.
*/
// let name = ['a', 'n', 'd', 'r', 'e', 's', 'n'];

// const firstN = name.find(letter => letter === "n");
// console.log(name.indexOf(firstN));

/*
3.Write a simple JavaScript program to join all elements of the following 
array into a string.*/

// let followingArray = ['Digital', 'Crafts'];

// function joinThem(array) {
//     array.join("");
// }
// console.log(followingArray);
// console.log(joinThem(followingArray));

/*
4. Write a JavaScript program which accept a number as input and insert dashes (-) 
between each number.

Example: const numbers = 8675309
*/
// const numbers = 8675309;
// const dashNum = (num) => {
//     return num.toString().split("").join("-");
// }
// console.log(dashNum(numbers))
// const numbers = 8675309;
// function dashNum(num) {
//     return num.toString().split("").join("-");
// }

// console.log(dashNum(numbers));

/*
5. Write a JavaScript program to sort the items of an array
*/
// let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
// let numbers = [1,111,4,-3,1.2, 5];
// function sortingItems(array) {
//     return array.sort();
// }

// console.log(sortingItems(cities));
// console.log(sortingItems(numbers));

// let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
// let numbers = [1,111,4,-3,1.2, 5];

// const sortingItems = (array) => {
//     return array.sort();
// }
// console.log(sortingItems(cities));
// console.log(sortingItems(numbers));
/*
6. Write a JavaScript program to find the most frequent item of an array.
Sample array: const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9,
3];
*/
// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// const mostFrequent = (array) => {
//     //create an items object to store the value of each index in array
//     let items = {};
//     //iterate over the array
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         //if the item is present in the items object, add 1 to the value
//         if (items[item]) {
//             items[item]++;
//         //if item is not present in the items object, assign value to 0
//         //its being added to the object for the first time
//         } else {
//             items[item] = 1;
//         };
//     };
//     //return the key that has the highest value
//     console.log(items)
//     return Object.keys(items).reduce((a, b) => items[a] > items[b] ? a : b);
// }

// console.log(mostFrequent(arr1));

