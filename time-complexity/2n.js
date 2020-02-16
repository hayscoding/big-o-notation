function printIndicesTwice(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    // Iterates thru all array elements 2 times (hence 2n)
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

var testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

printIndicesTwice(testArr)