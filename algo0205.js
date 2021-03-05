/*
Practice Problem
// Example 1: addUpTo
// -Write a function that takes an input n, and returns the sum from 
1 up to n
// addUpTo(3) --> 6             (3+2+1 = 6)
Take the next 10-15 min to solve this problem in as many ways as 
possible.

How many different ways could you think of to solve this problem?
1? 2? 3? 4?...
*/

function addUpTo(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        sum += i;
        i+=1;
    }
    return sum;
}
var output = addUpTo(3) //6   
console.log(output);

var output = addUpTo(4) //10   
console.log(output);

var output = addUpTo(10) //55   
console.log(output);



function addUpTo(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total+= i;
    }
    return total;
}

var result = addUpTo(3)//6
console.log(result);

var result = addUpTo(4)//10
console.log(result);

var result = addUpTo(10)//55
console.log(result);