// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    //define newArr =[]
    let newArr = []
    //num.toString().split('')
    let ogArr = num.toString().split('')
    //for loop with i = 0 and n = num.length - 1
    for(i = 0, n = ogArr.length - 1; i < n; i++){
      //account for zeroes by excluding them with an if statement
      if(ogArr[i] !== '0'){
        //multiplied by 10 to the power of however many decimals remain
        newArr.push((String(ogArr[i])) * (10 ** (n - i)))
      }
    }
      //account for ones digit and for it being zero
      if(ogArr[ogArr.length - 1] !== '0'){
        newArr.push(ogArr[ogArr.length - 1])
        }
      //return solution with + sign as a string
      return newArr.join(' + ')
  
  }