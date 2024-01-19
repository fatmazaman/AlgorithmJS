// Occurrence of Charater in a String
const occurChar = (str, a) => {
    if (!a || !str) {
        return 0 // Handle cases where a is not provided or the string is empty
    }

    var count = 0
    var pos = str.indexOf(a)

    while (pos !== -1) {
        count++
        pos = str.indexOf(a, pos + 1)
    }

    return count
}

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
module.exports = { matrix, occurChar }