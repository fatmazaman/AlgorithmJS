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

module.exports = { isPrime, printPrime }
