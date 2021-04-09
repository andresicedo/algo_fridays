// //Write a function that multiplies two numbers (provided as arguments) without using *
// function multiplyWithoutTheStar(num1, num2){
//     let product = num1
//     if(num2 === 0) {
//         return 0
//     }
//     for(let i = 0; i < num2 - 1; i++){
//       product += num1
//     }
//     return product
//   }

// console.log(multiplyWithoutTheStar(6,7))


/*Write a function to return a boolean based on whether or not the 
argument provided (string) is a palindrome. A palindrome is word or 
phrase that has the same characters whether forward or backwards eg 
racecar => true; truck => false
*/

// function isPalindrome(string) {
//     let spiltString = string.split("");
//     let reversedString = string.split("").reverse();
//     let join = reversedString.join("")
//     // for (let i = 0; i < spiltString.length; i++) {
//     //     const letter = spiltString[i];
//     //     if(letter === reversedString[i]) {
//     //         continue;
//     //     } else {
//     //         return false
//     //     }
//     // }
//     // return true
//     if (string === join) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('friday'));

/*Find the Mean, Median, and Mode of the array 
[4,3,1,2,2,7,9,14,2,27,400,9,1,8]*/

function mean(array) {
    let mean = 0
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        mean+=number
    }
    return mean / array.length;
}

function median(array) {
    let sorted = array.sort((a,b) => a-b)
    let middleIndex = Math.floor(sorted.length / 2)
    return sorted[middleIndex];
}

// function mode(array) {
//     let store = {}
//     for (let i = 0; i < array.length; i++) {
//         const number = array[i];
//         if(!store[number]){
//             store[number] = 1
//         } else {
//             store[number]++
//         }
//     }
//     let keys = Object.keys(store)
//     let mostCommon = store[keys[0]]
//     for (const key in store) {
//         if(key.value > mostCommon) {
//             mostCommon = key
//         }
//     }
//     console.log(store)
//     return mostCommon
// }

// console.log(mode([4,3,1,2,2,7,9,14,2,27,400,9,1,8]))


function averagePair(array, targetSum) {
      array.sort((a, b) => a - b);
      let left = 0;
      let right = array.length -1;
      while (left < right) {
          const currentSum = array[left] + array[right] / 2;
          if(currentSum === targetSum) {
              return true;
          } else if (currentSum < targetSum) {
              left++;
          } else if (currentSum > targetSum) {
              right--;
          }
      }
      return false;
  }

  console.log(averagePair([1,3,3,5,6,7,10,12,19],8))