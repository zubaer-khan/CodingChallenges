// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    // Parameters: receive a string with letters, spaces, commas, etc
    // return a string of 1's and 0's, where 1 is for vowels and 0 is for everything else
    // 'vowelOne' returns '01010101' and '123, arou' returns '000001011'
    // 
    // split into array
    // use map => includes to ternary function  
    // if not a '1' then turn it into a '0'
    // join array and return
    return s.split('').map((x) => 'aeiouAEIOU'.includes(x) ? '1' : '0').join('')
  }