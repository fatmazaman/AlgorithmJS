//matrix of matrix through Jagged array
const matrix = (rows, columns) => {
    var jaggedArray = new Array(rows)
    for (let i = 0; i < columns; i++) {
        jaggedArray[i] = new Array(rows)
        jaggedArray[i] = [0,0,0]
        
    }
    return jaggedArray
}

// example matrix(3,3)  output:[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

// hypotenuse
const hypotenuse = (a, b) => {
    function square(x) {
        return x*x;
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

module.exports = { matrix, hypotenuse, is_integer, add_all }