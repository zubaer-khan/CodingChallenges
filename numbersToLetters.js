// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    // receive a array of numbers in string format, return a string.
    // each number corresponds to letters of the alphabet in reverse order
    // includes '!', '?', and '', represented by '27', '28', '29'
    // return a string with the numbers converted to letters
    // example switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars'
    
    // define an array with the all of the letters at the corresponding position
    // define a result array to push to
    // use a loop to iterate through the array and push the letters to the result array
    let letters = '.zyxwvutsrqponmlkjihgfedcba!? '.split('')
    let result = []
    x.forEach((number) => result.push(letters[number]))
    return result.join('')
  }