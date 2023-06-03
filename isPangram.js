// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string){
    // given a string, detect if it is a pangram (contains every letter). Ignore numbers & punctuation
    // return True if it is a pangram, false if not
    // example isPangram('The quick brown fox jumps over the lazy dog.') is True
    
    // this is probably the long way but...
    // create an array of the alphabet (lowercase for simplicity)
    // change the string to lowercase and make it an array per character
    // filters the alphabet array for what's included in the string
    // compare that length to the alphabet length and return true if they are the same
    
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let stringArr = string.toLowerCase().split('')
    return alphabet.length === alphabet.filter(x => stringArr.includes(x)).length
  }