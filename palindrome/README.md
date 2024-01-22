# Palindrome

### Algorithm 1:
1. count the length of string 
2. iterate over till mid of string to check the condition
3. first element equal to last element and so on 
4. if not then return false


### Algorithm 2: Array help called every()
1. convert teh string into array
2. use every() helper of array
3. return based on condition

###### every()-> A function to be run for each element in the array


### Algorithm 3:
1. Convert string into array
2. reverse the array by method called reverse().
3. convert array into string.
4. return true/false based of equality of initial string and reversed string.

### Number 
- Number.EPLISON - smallest interval between two representable numbers. e.g - return Math.abs(x-y) < Number.EPSILON
- Number.MAX_SAFE_INTEGER - the largest integer.
- Number.MIN_SAFE_INTEGER - the smallest integer.
- Infinity - The only thing greater than Number.MAX_Value is Infinity.
- **Size Summary** --> -INFINITY < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VAlUE < INFINITY.

