// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves)
{
  // let result = [], count = {}
  // for loop add to count
  let count = {}
  let result = []
  for(i = 0; i < gloves.length; i++){
    let glove = gloves[i]
    if(count[glove]){
      count[glove] += 1
    }else{
      count[glove] = 1
    }
  }
  // for...in to push counts to result
  for(let glove in count){
    result.push(count[glove])
  }
  // map gloves count to only the amount of complete pairs, then reduce to get total
  return result.map(x => Math.floor(x / 2)).reduce((a,b) => a + b, 0)
}