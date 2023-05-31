// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

function covfefe(str){
    // given a string of words
    // return a string with all occurances of "coverage" replaced with "covfefe"
    // if there are no occurances of "coverage", add "covfefe" to the end of the string with a leading space
    // example: covfefe('nothing coverage') returns "nothing covfefe"
    // 
    // split the string into an array
  
    // conditional if array includes covfefe, map coverage to covfefe and return array
    // else return array + " covfefe"
    let arr = str.split(' ')
    if (arr.includes('coverage')){
      return arr.map((x) => x === 'coverage' ? 'covfefe' : x).join(' ')
      }else{
      return arr.join(' ') + ' covfefe'
      }
  }