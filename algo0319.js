/*
#1: Create a JS function to transform the object values to an array
Example:
const object = {
person: { name: 'Max', age: 28 },
hobbies: { sport: 'Football', game: 'Call of Duty' },
food: { asian: 'Pad Thai', mexican: 'Birria Taco', american: 'Hamburgers' }
}

Should display like this:

[
{name: 'Max', age: 28},
{sport: 'Football', game: 'Call of Duty},
{asian: 'Pad Thai', mexican: 'Birria Taco', american: 'Hamburgers'}
]
*/
// const object = {
//     person: { name: 'Max', age: 28 },
//     hobbies: { sport: 'Football', game: 'Call of Duty' },
//     food: { asian: 'Pad Thai', mexican: 'Birria Taco', american: 'Hamburgers' }
//     };
// const arrayToObj = (object) => {
//     return Object.values(object);
// }

// console.log(arrayToObj(object));
/*
[
{name: 'Max', age: 28},
{sport: 'Football', game: 'Call of Duty},
{asian: 'Pad Thai', mexican: 'Birria Taco', american: 'Hamburgers'}
]*/


/*
#2: Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits
*/
// function sameFrequency(num1, num2) {
//     let arr1 = num1.toString().split('');
//     let arr2 = num2.toString().split('');
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         const element = arr1[i];
//         if (arr2.includes(element)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }



// console.log(sameFrequency(182,281)) //true
// console.log(sameFrequency(34,14)) //false
// console.log(sameFrequency(0001, 0011))//false
// console.log(sameFrequency(4444, 4))//false
// console.log(sameFrequency(111, 1111))//false
// console.log(sameFrequency(223, 223))//true

/*
#3: Implement a function called, areThereDuplicates which accepts a variable 
number of arguments,and checks whether there are any duplicates among the arguments 
passed in.
*/
// function areThereDuplicates(...theArgs) {
//     let sortedArr = theArgs.sort();
//     for (let i = 0; i < sortedArr.length; i++) {
//         const element = sortedArr[i];
//         const nextElement = sortedArr[i+1];
//         if(element === nextElement) {
//             return true;
//         } else {
//             continue
//         }
//     }
//     return false;
// }

// console.log(areThereDuplicates(1, 2, 3)) //false
// console.log(areThereDuplicates(1, 2, 2)) //true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true

/*
#4 Write a function to check the password strength with these conditions:
1 uppercase letter
1 lowercase letter
1 number
Password must be greater than 6 characters
*/
const checkPassword = (string) => {
    let lowerCase = /[a-z]/;
    let upperCase  =/[A-Z]/;
    let number = /[0-9]/
    if(string.length < 7 || !lowerCase.test(string) || !upperCase.test(string) || !number.test(string)) {
        return false
    }
    return true;
}

console.log(checkPassword('Andres1'))//true
console.log(checkPassword('andre'))//false
console.log(checkPassword('123456'))//false
console.log(checkPassword('Abcdefghijklmmopqrstuvwxyz0123456789'))//true