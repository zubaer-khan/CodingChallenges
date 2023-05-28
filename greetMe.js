// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    // take in name, can be upper or lower case
    // return "Hello" + Name! (with first letter capitalized) and exclamation mark
    // "riley" returns "Hello Riley!"
    // use charAt(0).toUpperCase() to uppercase first letter, slice(1) toLowerCase() for the rest
    // add those together for correctly formatted name
    // return with `Hello ${name}!`
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${name}!`
    
  };