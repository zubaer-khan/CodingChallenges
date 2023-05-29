// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    //given a string of words, sort alphabetically by the final char in each
    //if the same char appears, sort by order of appearance
    //return an array of the words sorted
    //last('hi a big dog') ['a', 'big', 'dog', 'hi']
    
    //split string
    //sort by final char
    //return sorted array
    return x.split(' ').sort((a,b) => a[a.length - 1] < b[b.length - 1] ? -1 : 0)
  }