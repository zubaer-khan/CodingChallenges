// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {

    numbers = numbers.sort((a, b) => a - b)
  
    for (let i = 0, n = numbers.length; i < n; i++){
      return numbers[i] !== numbers[i + 1] ? numbers[i] : numbers[n - 1]
    }
  }