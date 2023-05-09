// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    //define a new array
    let newArr = []
    //filter values from old array
    a.filter((value) => {
      //if they do not appear in new array, push to new array
      if (!newArr.includes(value)){
        newArr.push(value)
        }
      })
    //return new array
    return newArr
  }