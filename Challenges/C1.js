// JavaScript Challenge ⚡
// Write a function that removes duplicates from an array
// Example:
// removeDuplicates([1,2,2,3,4,4,5])
// Expected output:
// [1,2,3,4,5]
// Try solving it without using a loop.
// How would you do it?





// function removeDuplicates(arr)
// {
//     return[...new Set(arr)]

// }

// console.log(removeDuplicates([1,2,2,3,4,4,5]));




// JavaScript Challenge 🧠
// Reverse a string **without using `.reverse()`**
// Example:
// ```javascript
// reverseString("javascript")
// ```
// Expected output:
// ```
// tpircsavaj
// ```
// What’s the cleanest solution you can come up with?



function reverseString(){
  let  str="javascript";
  let reversed=""

    for (let i =str.length-1 ; i >=0 ; i--) {
     reversed+=str[i];
                
    }

    return reversed;

}

console.log(reverseString());

console.log( typeof null); //object
console.log( typeof []);// object
console.log(typeof NaN);// number









