// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let n = numbers.length - 1
    let even = numbers.filter((x,i) => i % 2 == 0)
    
    return numbers.length > 1 ? numbers[n] * even.reduce((a,b) => a + b, 0) : 0
  //   return numbers.length > 1 ? numbers[numbers.length - 1] * numbers.filter((x, i) => i % 2 === 0).reduce((a,b) => a + b) : 0
   }