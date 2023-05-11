// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    //define result array
    let result = []
    //define first array
    let arr = []
    //count up to the size for first array
    for (i = 1; i <= size; i++){
      arr.push(i)
    }
    //for each number of the first array, 
    arr.forEach((value) => {
      //define a new array and map the first array * the number to the new array
      let newArr = arr.map((x) => x * value)
      //push the entire array to result array
      result.push(newArr)
    })
    //return result array
    return result
  }