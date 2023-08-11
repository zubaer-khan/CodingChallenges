// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text){
    let result = []
    result.push(text.toUpperCase())
    text = text.toUpperCase().split('')
    for(let i = 0; i < text.length - 1; i++){
      let temp = text.shift()
      text.push(temp)
      result.push(text.join(''))
    }
    return result
  }