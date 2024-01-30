// Print the n-th term of the Fibonacci Sequence
// (lastlast, last) = (last, lastlast+last) basic concept

function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast;
    }
    if (n == 1) {
        return last;
    }
    
    return getNthFiboBetter(n-1, last, lastlast + last);
}
for (var i=1; i < 10; i++) {
    console.log(getNthFiboBetter(i,0,1));
}

module.exports = getNthFiboBetter

