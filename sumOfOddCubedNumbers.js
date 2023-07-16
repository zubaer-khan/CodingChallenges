// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    // make sure array contains numbers and is all numbers
    // map cubed
    // filter odds
    // reduce odds
    return arr.filter(x => typeof x == "number").length === arr.length && arr.length > 1 ?
           arr.map(x => x ** 3).filter(x => x % 2 != 0).reduce((a,b) => a + b) :
           undefined; 
    }