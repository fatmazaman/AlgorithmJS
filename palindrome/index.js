// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    var len = str.length
    for (var i =0; i < len/2; i++){
        if(str[i] !== str[str.length-i-1]){
            return false
        }
    }
    return true
}
// Implementation of Algorithm 2
function palindrome1(str){
    const reversed = str.split('').reverse().join('')
    return reversed === str
}

//implementation of Algorithm 3
function palindrome2(str){
    return str.split('').every((char, i) => {
        return char === str[str.length -i-1]
    })
}

module.exports = palindrome , palindrome1, palindrome2
