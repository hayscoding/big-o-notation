/*
    Algorithms with running time O(2^N) are often recursive algorithms 
    that solve a problem of size N by recursively solving two smaller 
    problems of size N-1.
*/


// Finds num at nth position in the fibonacci sequence 
// (1, 1, 2, 3, 5, 8, 13, 21, 34, ...)
function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8))