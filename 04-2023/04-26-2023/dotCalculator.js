// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


const dotCalculator = (equation) => {
    equation = equation.split(' ')
    if (equation[1] === '+'){
      return equation[0].concat(equation[2]).toString()
    }else if (equation[1] === '-'){
      return equation[0].slice(equation[2].length).toString()
    }else if (equation[1] === '*'){
      let result = ''
      for (i = 0; i < equation[2].length; i++){
        result += equation[0]
      }return result
    }else{
      if (equation[0].length >= equation[2].length){
        let divide = Math.floor(equation[0].length / equation[2].length)
        let result = ''
        for (i = 0; i < divide; i++){
          result += '.'
        }return result
      }else{
        return ''
      }
    }
  }