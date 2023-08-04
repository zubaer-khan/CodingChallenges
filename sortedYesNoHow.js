// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let nums = [...array]
    if (array.every((x,i) => x == nums.sort()[i])){
      return 'yes, ascending' 
    }else if(array.every((x,i) => x == nums.sort((a,b) => b - a)[i])){
      return 'yes, descending'
    }else{
      return 'no' 
    }
  }
  