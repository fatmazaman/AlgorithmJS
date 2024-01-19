// hypotenuse
const hypotenuse = (a, b) => {
    function square(x) {
        return x*x
        }
    return Math.sqrt(square(a) + square(b))
}

// Is Integer 
const is_integer = int => {
    if (typeof(int) === 'number'){
        return true
    }else {
        return false
    }
        
}

// Sum array 
const add_all = array => {
    if (array.length >0 ){
        let sum = 0
        array.forEach(item =>{
            sum +=item
        }) 
        return sum
    }else {
        return 'empty string'
    }
}

function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim()
}

module.exports = { hypotenuse, is_integer, add_all, removeExtraSpaces }