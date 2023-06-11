// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(s, symbol) {
    // take in a string and a letter (symbol)
    // return the index of the second occurrance, or -1 if that doesn't exist
    // secondSymbol('Hello world!!!','l')  --> 3
    // secondSymbol('Hello world!!!', 'A') --> -1
    
    // set up an empty result array
    // split s to array, filter by symbol, push index to result array
    // return result[1] or -1
    
    let result = []
    s.split('').filter((x, i) => {
      if (x === symbol){
        result.push(i)
      }
    })
    return result.length > 1 ? result[1] : -1
  }