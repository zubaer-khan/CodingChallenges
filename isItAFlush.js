// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

function isFlush(cards) {
    // receive an array of 5 strings, with number and suit values ('5H', '10D', etc)
    // return true if the hand is a flush (all same suit), or false otherwise
    // example isFlush([  "AS", "3S",  "9S", "KS", "4S" ]),  true 
    
    // define empty suits array
    // loop through cards array
    // split each string and pop() into suits array
    // create new result Set from suits array
    // if result.length === 1 return true
    
    let suits = []
    cards.forEach((x) => {
      suits.push(x.split('').pop())
    })
    let result = [...new Set(suits)]
    return result.length === 1
  }