// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

function countConsonants(str) {
    // count the number of UNIQUE consonants in a string
    // return the number of unique consonants
    // 'dad' returns 1, 'aeiou' returns 0
    // 
    // make the string lowercase for easier comparison
    // split to an array
    // filter using includes and assign to a variable
    // remove duplicates using set constructor and assign to a variable
    // return length of new array
    
    str = str.toLowerCase().split('').filter((x) => 'bcdfghjklmnpqrstvwxyz'.includes(x))
    let arr = [...new Set(str)]
    return arr.length
  }