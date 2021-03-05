/*
Question 2:
Write a function that, given a string, will always return the 4th charachter. 
And if the string is too short, the console will print "too short of a string".

*/
function find4thChar(string) {
    let split = string.split("");
    if(split.length > 3) {
        return split[3];
    } else {
        return "too short of a string";
    }
}

var output = find4thChar('hello')// l
console.log(output)

var output = find4thChar('hey')// too short of a string
console.log(output)

var output = find4thChar('hi')// too short of a string
console.log(output)