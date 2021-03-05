/*
Question 1:
Write a function that takes two agruements, String1 and String2. 
Join these strings together and reverse the newString.

uoy olleh
*/

function Add_and_Reverse(String1, String2) {
    //create an var and assign to a string with one empty space
    let space = " ";
    //concatenate string1 space and string 2 
    let string3 = String1.concat(space, String2)
    //split the string, reverse method and re-join the string
    let result = string3.split("").reverse(" ").join("");
    //return the result
    return result;
    
}

var output = Add_and_Reverse('hello', 'you')
console.log(output)
