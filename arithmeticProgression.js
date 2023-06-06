// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, d, n) {
	// receive the first element, difference, and quantity
  // return a string of numbers separated by comma and space
  // (1,2,5), '1, 3, 5, 7, 9'
  
  //create a new string and assign a to it as a string
  let nums = a.toString()
  //use a for loop to iterate until n-1, adding a + d and concatenating to nums with ", "
  for(i = 0; i < n - 1; i++){
    a = a + d
    nums += `, ${a}`
  }
  return nums
}