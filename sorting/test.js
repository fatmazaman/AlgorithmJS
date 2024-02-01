const { bubbleSort, selectionSort, insertionSort, quickSort , mergeSort} = require('./index')

describe('bubbleSort function', () => {
  it('sorts the array in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray)
  })

  it('leaves the already sorted array unchanged', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(bubbleSort(sortedArray)).toEqual(sortedArray)
  })

})

describe('selectionSort function', () => {
  it('sorts the array in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(selectionSort(unsortedArray)).toEqual(sortedArray)
  })

  it('leaves the already sorted array unchanged', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(selectionSort(sortedArray)).toEqual(sortedArray)
  })

})


describe('insertionSort function', () => {
  it('sorts the array in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(insertionSort(unsortedArray)).toEqual(sortedArray)
  })

  it('leaves the already sorted array unchanged', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(insertionSort(sortedArray)).toEqual(sortedArray)
  })

})

describe('quickSort function', () => {
  it('sorts the array in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(quickSort(unsortedArray)).toEqual(sortedArray)
  })

  it('leaves the already sorted array unchanged', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(quickSort(sortedArray)).toEqual(sortedArray)
  })

  it('returns an empty array if the input array is empty', () => {
    const emptyArray = []
    expect(quickSort(emptyArray)).toEqual([])
  })

  it('handles arrays with duplicate values correctly', () => {
    const arrayWithDuplicates = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(quickSort(arrayWithDuplicates)).toEqual(sortedArray)
  })

})
describe('mergeSort function', () => {
  it('sorts the array in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(mergeSort(unsortedArray)).toEqual(sortedArray)
  })

  it('leaves the already sorted array unchanged', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(mergeSort(sortedArray)).toEqual(sortedArray)
  })

  it('returns an empty array if the input array is empty', () => {
    const emptyArray = []
    expect(mergeSort(emptyArray)).toEqual([])
  })

  it('handles arrays with duplicate values correctly', () => {
    const arrayWithDuplicates = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(mergeSort(arrayWithDuplicates)).toEqual(sortedArray)
  })

})
