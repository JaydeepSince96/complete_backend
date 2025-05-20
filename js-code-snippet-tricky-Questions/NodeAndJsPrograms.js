//Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.

// function SumOfArr(...arr) {
//   return arr.reduce((acc, item) => acc + item, 0);
// }

// console.log(SumOfArr(1, 2, 3, 4));
//===================================================================================================

// Write a function in JavaScript that takes a string as input and returns a new string with all the vowels

// function PrintVovels(str){
//     let vovels = []
//     for(vol in str){
//         if(str[vol] === "a" || str[vol] === "e" || str[vol]==="i" || str[vol]==="o"|| str[vol]==="u"){
//             vovels.push(str[vol])           
//         }
//     }
//     return vovels;
// }

// const result = PrintVovels("jaydeep")
// console.log(result)

// 2nd Solution:-

// function PrintVowels(str) {
//     const vowels = [];
//     const vowelSet = "aeiou";

//     for (let char of str) {
//         if (vowelSet.includes(char)) {
//             vowels.push(char);
//         }
//     }

//     return vowels;
// }

//======================================================================================================

//Write a function in JavaScript that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order

// function SortedAlphabaticOrder(arr){
// //    return arr.sort((a,b)=> a - b) It will work along with only numerical values.
// return arr.sort()
// }

// const result = SortedAlphabaticOrder(["jaydeep", "is", "a", "good", "boy"])
// console.log(result)

//===========================================================================================================

// Write a function in JavaScript that checks if a string is a palindrome. 

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true 
console.log(isPalindrome("hello")); // Output: false
