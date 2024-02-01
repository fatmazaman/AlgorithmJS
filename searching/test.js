const { linearSearch, binarySearch } = require('./index.js')


describe('linearSearch function', () => {
  it('returns true if the target is found in the array', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 30
    expect(linearSearch(array, target)).toBe(true)
  })

  it('returns false if the target is not found in the array', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 35
    expect(linearSearch(array, target)).toBe(false)
  })

})


describe('binarySearch function', () => {
  it('returns the index of the target if found in the array', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 30
    expect(binarySearch(array, target)).toBe(2) 
  })

  it('returns -1 if the target is not found in the array', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 35
    expect(binarySearch(array, target)).toBe(-1) 
  })

})
