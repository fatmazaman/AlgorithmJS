//  Implemenattion of Algorithm 1
function reverse(str){
    return str.split('').reverse().join('')
}

// Implementation of Algorithm 2
function reversestr2(str2){
    var reversedStr = ''
    for (let character of str2){
        reversedStr = character + reversedStr
    }
    return reversedStr
}

// Implementation of Algorithm 3
function reversestr3(str3){

    return str3.split('').reduce((rev, char) => char +rev, '')
}

//Implementation of Algorithm 4 : Fatma's Logic
function reversestr4(str4){
    str4 = str4.split('')
    let n = str.length
    if (n%2 == 0){
         // logic of recursive function
    }
    if(n%2 == 1){
        // logic of recursive fucntion
    }
}

module.exports = reverse, reversestr2, reversestr3, reversestr4
