// const sumRange1 = (num) => {
//     if(num === 1) {
//         return 1;
//     }
//     return num + sumRange1(num - 1);
// }

// console.log(sumRange1(3));


/*
Factorial
Write a function that accepts a number as an argument
The function should then return the factorial of that number
This link is to help better understand what a factorial is.
A factorial of a number means to multiply all whole numbers between that 
number in one

Meaning 5! => 5 * 4 * 3 * 2 * 1 = 120

*/
// function factorial(number) {
//     if(number === 0) {
//         return 1;
//     }
//     return number * factorial(number - 1);
// }

// console.log(factorial(5)) //120
// console.log(factorial(7)) //5040

/*
Fibonacci Sequence - Recursively
Write a program that asks the user for a numerical input 'n'
It will then print out the corresponding fibonacci sequence values from 0 to 'n'

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
This link is to help better understand what the fibonacci sequence
Essentially, (excluding the first two numbers of the sequence) you can get 
the next number of the sequence, by adding the last two numbers together

Feel Free to grab your old solution and just refactor with recursion
Example:

fib(4)
//n => fibSequence(n)
//0 => 0
//1 => 1
//2 => 1
//3 => 2
//4 => 3
*/

function fibonacci(inputNumber) {

    if(inputNumber === 1) {
        return [0,1];
    } else {
        let next = fibonacci(inputNumber - 1);
        next.push(next[next.length - 1] + next[next.length - 2]);
        return next;
    }
}

console.log(fibonacci(4));

/*
Product of Array
Write a function called productOfArray

It should take in an array of numbers as an input

The function should return the product of the inputted array

Solve using our newfound knowledge of recursion!

*/
// function productOfArray(array) {
//     if(array.length === 1) {
//         return array[0];
//     } else {
//         return array[0] * productOfArray(array.slice(1));
//     }
// }

// console.log(productOfArray([1, 2, 3])) //returns 6
// console.log(productOfArray([1, 2, 3, 10])) //returns 60

/*
Recursive Permutations
Write a function that accepts an array of integers as an argument

The function should find all permutations that can be formed from 
the input and should return them as an array of arrays

Hint: I would probably go the recursive helper method route for this one

Check out this video of a DC instructor explaining how to solve this problem
*/
// function permutations(array) {
//     //create a result array
//     let possibilities = [];
//     //edge cases for empty array, array with length of 1 and index type
//     if (array.length === 0) {
//         return [];
//     }
//     if (array.length === 1) {
//         return [array];
//     }
//     //iterate over array
//     for (let i = 0; i < array.length; i++) {
//         if(typeof array[i] !== "number") {
//             continue;
//         }
//         //create a var that is an array of the current index
//         const current = [array[i]];
//         //create a var that contains the remaining indexes after i
//         const remaining = array.slice(0, i).concat(array.slice(i + 1));
//         //create a var that will call the permutations function with the remaining
//         //array of numbers as the argument - (recursion)
//         const remainingNumbers = permutations(remaining);
//         //iterate over the remaining numbers, starting at 0
//        for (let j = 0; j < remainingNumbers.length; j++) {
//            //combine the current array from the initial iteration and the remaining 
//            //numbers iteration
//           const possibleArrays =  current.concat(remainingNumbers[j]);
//           //push all array possibilities to the possibilites array
//           possibilities.push(possibleArrays);
//          }
//     }
//       return possibilities;
//      }

// console.log(permutations([1, 2])) //[[1, 2], [2, 1]]
// console.log(permutations([1, 2, 3])) //[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


/*
Recursive Range
Write a function that accepts a number as an argument, we will call it n
The function should add up all the numbers from 0 to n and return it
Use recursion to solve the problem
*/

// function recursiveRange(number) {
//     if(number === 0) {
//         return 0;
//     }
//     return number + recursiveRange(number - 1);
// }

// console.log(recursiveRange(3)) //6
// console.log(recursiveRange(6)) //21
// console.log(recursiveRange(10)) //55

/*
Recursive Reverse
Write a function that accepts a string as an argument
The function should reverse the string recursively and return the new 
reversed string
Try to solve without using built in methods or functions (i.e. don't simply 
do stringVariableName.split('').reverse())

*/

// function recursiveReverse(string) {
//     let reversed = "";
//     for(let i = string.length -1; i >= 0; i--) {
//         reversed += string[i];
//     }
//     return reversed;
// }


// console.log(recursiveReverse('awesome')) //'emosewa'
// console.log(recursiveReverse('digitalcrafts')) //'stfarclatigid'


/*
Stringify Numbers
Write a function called stringifyNumbers which takes in an object
It should then find all of the values which are numbers and converts them to strings
Hint: typeof
*/


// console.log(stringifyNumbers(exampleObject))
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/