/*
Question 1:
Given an array of random strings. Write a function that will return a new 
array with only the words that are 4 letters or more.
*/

randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot'];
//create a new array to push words that meet my argument
    //use the for each method to iterate over the random string array
        //if the length of string is greater than 3, push to new array
    //return new array

let notRandomStrings = [];

randomStrings.forEach(word => {
    if(typeof word === "string" && word.length > 3) {
        notRandomStrings.push(word);
    }
    return notRandomStrings;
});

console.log(notRandomStrings)
//[ 'elephant', 'penguin', 'bird', 'lion', 'parrot' ]