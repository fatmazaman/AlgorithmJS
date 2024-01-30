const getNthFiboBetter = require('./index.js')

describe('getNthFiboBetter function', () => {
  it('returns the correct Fibonacci number for n = 0', () => {
    expect(getNthFiboBetter(0, 0, 1)).toBe(0)
  })

  it('returns the correct Fibonacci number for n = 1', () => {
    expect(getNthFiboBetter(1, 0, 1)).toBe(1)
  })

  it('returns the correct Fibonacci number for n = 2', () => {
    expect(getNthFiboBetter(2, 0, 1)).toBe(1)
  })

  it('returns the correct Fibonacci number for n = 3', () => {
    expect(getNthFiboBetter(3, 0, 1)).toBe(2)
  })

  it('returns the correct Fibonacci number for n = 4', () => {
    expect(getNthFiboBetter(4, 0, 1)).toBe(3)
  })

  it('returns the correct Fibonacci number for n = 5', () => {
    expect(getNthFiboBetter(5, 0, 1)).toBe(5)
  })

  it('returns the correct Fibonacci number for n = 6', () => {
    expect(getNthFiboBetter(6, 0, 1)).toBe(8)
  })

  it('returns the correct Fibonacci number for n = 7', () => {
    expect(getNthFiboBetter(7, 0, 1)).toBe(13)
  })

  it('returns the correct Fibonacci number for n = 8', () => {
    expect(getNthFiboBetter(8, 0, 1)).toBe(21)
  })

  it('returns the correct Fibonacci number for n = 9', () => {
    expect(getNthFiboBetter(9, 0, 1)).toBe(34)
  })
})
