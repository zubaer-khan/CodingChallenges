// Having two standards for a keypad layout is inconvenient!
// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers){
    // Parameters: string of numbers. Always positive, from 0 - 9,
    // Return a string of numbers that match what a cell phone would produce if pushing the same buttons 
    // for Example: for "94561", we return "34567", as the 456 row remains the same
  
    return numbers.split('').map((x) => "0789456123"[x]).join('')
  
  }