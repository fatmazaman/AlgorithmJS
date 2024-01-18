// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function fib(n) {
    const res = [0,1]
    res.push(2)
    res.push(3)
    console.log(res)
    res.unshift(6)
    res.unshift(9)
    console.log(res)
  
    return res
}
// Implementation of Algorithm 2
// function palindrome1(str){
//     const reversed = str.split('').reverse().join('')
//     return reversed === str
// }

// //implementation of Algorithm 3
// function palindrome2(str){
//     return str.split('').every((char, i) => {
//         return char === str[str.length -i-1]
//     })
// }
// console.log(fib(4))
fib(2)
module.exports = fib
