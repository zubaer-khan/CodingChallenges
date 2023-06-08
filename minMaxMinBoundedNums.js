// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

function minMinMax(array) {
  // given an unsorted array of integers, find smallest and largest number in the array
  // as well as the smallest number between the two bounds that is NOT in the array
  // return a new array with [smallest, minimumAbsent, largest]
  // for example: [-1, 4, 5, -23, 24]), [-23, -22, 24]
  
  // create a Set to filter out any duplicates
  // store the minimum and maximum values in variables
  // iterate starting from the minimum to max to check if numbers are in the set
  // assign a variable to the first number that is not in the set
  // return the new array with three variables
  let minimumAbsent
  let numbers = new Set(array)
  const smallest = Math.min(...array)
  const largest = Math.max(...array)
  for(let i = smallest + 1; i < largest; i++){
    if(!numbers.has(i)){
      minimumAbsent = i
      break;
    }
  }
  return [smallest, minimumAbsent, largest]