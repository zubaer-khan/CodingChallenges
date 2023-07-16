// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
    // trim()
    // split
    // map index % 2 != 0 ? x.split('').reverse().join('') : x
    // join
    return str.trim().split(' ').map((x,i) => i % 2 != 0 ? x.split('').reverse().join('') : x).join(' ')
  }