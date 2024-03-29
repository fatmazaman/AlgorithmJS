// Bubble Sort : Time Complexity O(n*2) Space Complexity O(1)

function bubbleSort(array) {
    for (var i= 0; i< array.length; i++){
        for (var j=0; j<=i; j++){
            if( array[i] < array[j] ){
                swap(array, i, j)
            }
        }
    }
    return array
}


function swap (array, index1, index2){
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

// Selection Sort : Time Complexity O(n*2) Space Complexity O(1)

function selectionSort(items) {
    var len = items.length,
        min

    for (var i = 0; i < len; i++) {
        min = i
        for (j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j
            }
        }
        if (i != min) {
            swap(items, i, min)
        }
    }

    return items
}


// Insertion Sort : Time Complexity O(n*2) Space Complexity O(1)
function insertionSort(items) {
    var len = items.length,
        value, 
        i, 
        j

    for (i = 0; i < len; i++) {

        value = items[i]

        for (j = i - 1; j > -1 && items[j] > value; j--) {

            items[j + 1] = items[j]
        }
        items[j + 1] = value
    }
    return items
}

// Quick Sort : Time Complexity O(nlog2n) on average , O(n*2) on worst and Space Complexity O(log2n)
function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1)
}

function quickSortHelper(items, left, right) {
    var index
    if (items.length > 1) {
        index = partition(items, left, right)

        if (left < index - 1) {
            quickSortHelper(items, left, index - 1)
        }

        if (index < right) {
            quickSortHelper(items, index, right)
        }
    }
    return items
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)]
    while (left <= right) {
        while (pivot > array[left]) {
            left++
        }
        while (pivot < array[right]) {
            right--
        }
        if (left <= right) {
            var temp = array[left]
            array[left] = array[right]
            array[right] = temp
            left++
            right--
        }
    }
    return left
}
// Merge Sort : Time Complexity O(nlog2n) and Space Complexity O(n)
function merge(leftA, rightA){
    var results= [], leftIndex= 0, rightIndex= 0

    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if( leftA[leftIndex]<rightA[rightIndex] ){
            results.push(leftA[leftIndex++])
        } else {
            results.push(rightA[rightIndex++])
        }
    }
    var leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex)

    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains)
}

function mergeSort(array) {
    if(array.length<2){
        return array
    }

    var midpoint = Math.floor((array.length)/2),
        leftArray = array.slice(0, midpoint),
        rightArray = array.slice(midpoint)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}


module.exports = { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort}