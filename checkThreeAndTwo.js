// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    let count = {}
    let result = []
    for (i = 0; i < array.length; i++){
      let letter = array[i]
      if (count[letter]){
        count[letter] += 1
      }else
        count[letter] = 1
    }
    for(let letter in count){
      result.push(count[letter])
    }
    return result.includes(2) &&  result.includes(3)
  }