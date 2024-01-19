const isPrime = n => {
    if ( n<=1 ) return false

    //check from 2 to n-1
    for(var i=2; i<n; i++){
        if(n % i == 0 ){
            return false
        }
    }
    return true
}

const isPrime1= n => {
    if (n <= 1) return false
    
    // Check from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    
    return true
}

const isPrime2 = n => {
    if (n <= 1) return false
    if (n <= 3) return true
    
    if (n % 2 === 0 || n % 3 === 0) return false
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }
    
    return true
}

const printPrime = n => {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

const primeFactors = n => {
    // Print the number of 2s that divide n 
    while (n % 2 === 0) {
        console.log(2)
        n = n / 2
    }

    // n must be odd at this point, so i = i + 2
    for (let i = 3; i * i <= n; i = i + 2) {
        while (n % i === 0) {
            console.log(i)
            n = n / i
        }
    }

    // If n is a prime number 
    if (n > 2) {
        console.log(n)
    }
}

// Time complexity: O(sqrt(n))

module.exports = { isPrime, printPrime, primeFactors }
