// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    let result = []
    let len = array.length
    if (len === 0 || n === 0 || n > len) return []
      for(let i = 0; i < len; i++){
      if(array[n + i] == array[len - 1 + n]){
        result.push(array.slice(i, n + i))
        return result
      }else{
        result.push(array.slice(i, n + i))
      }
    }
  }