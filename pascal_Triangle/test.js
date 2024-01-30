const pascalTriangle = require('./index.js')

describe('pascalTriangle function', () => {
  it('returns 1 for cell (0, 0)', () => {
    expect(pascalTriangle(0, 0)).toBe(1)
  })

  it('returns 1 for cell (1, 0)', () => {
    expect(pascalTriangle(1, 0)).toBe(1)
  })

  it('returns 0 for cell (0, 1)', () => {
    expect(pascalTriangle(0, 1)).toBe(0)
  })

  it('returns 1 for cell (2, 1)', () => {
    expect(pascalTriangle(2, 1)).toBe(2)
  })

  it('returns 3 for cell (3, 2)', () => {
    expect(pascalTriangle(3, 2)).toBe(3)
  })

  it('returns 10 for cell (5, 2)', () => {
    expect(pascalTriangle(5, 2)).toBe(10)
  })

  // Add more test cases as needed
})
