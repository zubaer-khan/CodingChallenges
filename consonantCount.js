// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.



function consonantCount(str) {
    // take in a string of text
    // return the number of consonants in the string
    // example: consonantCount('hello', 3)
    
    // split into an array
    // filter array by !includes 'aeiouAEIOU'
    // return the length of the new array
    
    return str.split('')
              .filter((x) => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(x))
              .length
  }