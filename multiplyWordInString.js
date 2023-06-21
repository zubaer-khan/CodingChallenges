// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

function modifyMultiply (str,loc,num) {
    // receive a string and two numbers
    // multiply the locth word of the string num times
    // return the result with hyphens in between
    // modifyMultiply("This is a string",3 ,5), "string-string-string-string-string"
    
    // convert the string to an array
    // assign a variable to array[loc]
    // create empty array
    // while loop prints to empty array num times
    // return array.join('-')
    
    let word = str.split(' ')[loc]
    let result = []
    let i = 0
    while (i < num){
      result.push(word)
      i++
    }
    return result.join('-')
  } 