/*
Question 1
Count the number of islands of 1s
Given an array of 0s and 1s, count the number of "islands of 1s"
Example: [0,1,1,0,1,0,1,1,1] The answer should return 3
*/

// function islandsOfOnes(array) {
//     let count = 0
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         const prev = array[i-1];
//         // const next = array[i+1];
//         if (prev !== 1 && current === 1) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(islandsOfOnes([1,0,1,1,0,1,1,1,0,1]))



/*
Question 2
Say you have an array for which each element is the price of a 
given stock and the index represents the day. If you were only 
permitted to complete at most one transaction (ex:buy one and sell 
one share of the stock), design an algorithm to find the maximum profit
You cannot sell a stock before you buy one
Example: [7,1,5,3,6,4] should return 5 ,Buy on day 2 (price = 1) and sell 
on day 6 (price = 6) profit will be 5
*/

function maxProfit(array) {
    let profit = 0;
    let recentBuy = 0;
    for (let day = 1; day < array.length; day++) {
        let current = array[day]
        let nextDay = array[day+1]
        
        if(current > nextDay) {
            continue;
        }
        if(current < nextDay && current > recentBuy) {
            profit += nextDay - recentBuy;
            recentBuy = nextDay;
        }
    }
    return profit;
}


console.log(maxProfit([7,1,5,3,6,4]))//5
console.log(maxProfit([0,1,2,3,4,5,6,7,4,5]))//6