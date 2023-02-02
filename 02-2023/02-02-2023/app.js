// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



// function findAverage(array) {
//     if (array.length === 0)
//       return 0;
//     else {
//       const initialValue = 0;
//       const sum = array.reduce((acc, currValue) => acc + currValue, initialValue);
//       return sum / array.length
//       }
//   }
//refactor using ternary operators
  const getAvg = array => array.length > 0 ? array.reduce((x,y) => x + y,0) / array.length : 0