// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    // receive a string (possibly empty)
    // return boolean based on whether the string has any repeating chars (false)
    // or not (true). An empty string is true. Ignore letter case
    // isIsogram "Dermatoglyphics" = true 
    // isIsogram "moose" = false
    // isIsogram "aba" = false
    
    // convert string to lowercase for easier comparison
    // split string
    // filter for each letter using indexOf and lastIndexOf
    // if length is > 1, return false, else true
    str = str.toLowerCase()
    return str.split('').filter((x) => str.indexOf(x) === str.lastIndexOf(x)).length === str.length
  }