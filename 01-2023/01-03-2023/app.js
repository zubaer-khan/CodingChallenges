// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


//P: Will the arguments always be positive numbers? What if the operation is not recognized?
//R: Output the result of the operation
//E: (Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
//P: 

function basicOp(operation, value1, value2){
    //basic if/else statement
    if (operation === '+') {
      return value1 + value2;
    } else if (operation === '-') {
      return value1 - value2;
    } else if (operation === "*") {
      return value1 * value2;
    } else if (operation === "/") {
      return value1 / value2;
      //account for unrecognized operator
    }else{
        return "Operator Not Recognized"
    }
  }