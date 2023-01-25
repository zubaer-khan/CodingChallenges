// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

//without methods
// function oddOrEven(array) {
//     let count = 0
//     if (array.length === 0) {
//       return 'even'
//    } else {
//      for (i = 0, n = array.length; i < n; i++){
//        count += array[i];
//      }
//      if (count % 2 === 0) {
//        return 'even'
//      } else
//        return 'odd'
//    }
//  }

//refactored using reduce method
 const oddEven = array => array.reduce((x,y) => x + y) % 2 ? "odd" : "even"