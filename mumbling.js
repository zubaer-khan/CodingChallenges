// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let newArr = []
      s = s.toLowerCase().split('')
    s.forEach((x, i) => {
      newArr.push(x.repeat(i + 1))
    })
    for(i = 0; i < newArr.length; i++){
      if (i > 0){
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1)
      }else{
        newArr[i] = newArr[i].charAt(0).toUpperCase()
      }
    }
    return newArr.join('-')
    }