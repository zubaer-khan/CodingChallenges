// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)

function firstNonRepeated(s) {
    // take in a string that may or may not have repeated characters
    // if the characters are all unique, return the first character
    // if there is no unique character, return null
    // otherwise, return the first unique character
    // 'test' returns 'e', 'teeter' returns 'r'
    
    // split string
    // filter for characters that indexOf !== lastIndexOf
    // if empty return null, else return first character
    
    let result = s.split('').filter(x => s.indexOf(x) === s.lastIndexOf(x))[0]
    return result !== undefined ? result[0] : null
   
  }