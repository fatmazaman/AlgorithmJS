// Linear Search 
function linearSearch (array, n) {
    for (var i=0; i < array.length; i++){
        if(array[i] == n){
            return true
        }
    }
    return false 
}

// Time Complexity O(N)

// Binary Search 
function binarySearch(array, n) {
    var lowIndex = 0,
        highIndex = array.length - 1

    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2)
        if (array[midIndex] == n) {
            return midIndex
        } else if (n > array[midIndex]) {
            lowIndex = midIndex+1
        } else {
            highIndex = midIndex-1
        }
    }
    return -1
}

// Time Complexity O(log2(n))

module.exports = { linearSearch , binarySearch }