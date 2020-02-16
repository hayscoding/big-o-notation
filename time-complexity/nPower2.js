function printAllOrderedPairs(arr) {
    for (let x = 0; x < arr.length; x++) {
        // Iterates thru array for each index in the array (hence n^2)
        for (let y = 0; y < arr.length; y++) {
            console.log(`[${arr[x]}, ${arr[y]}]`)
        }
    }
}

var testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

printAllOrderedPairs(testArr)