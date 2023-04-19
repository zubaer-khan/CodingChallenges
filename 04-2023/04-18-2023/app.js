// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



function divCon(x){
    let nums = 0
    let strs = 0
    x.forEach((x) => {
      if (typeof x === 'number'){
        nums += x
      }else{
        strs += Number(x)
      }
    })
    return nums - strs
  }