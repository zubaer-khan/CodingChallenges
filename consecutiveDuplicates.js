// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.




function removeConsecutiveDuplicates(string) {
    //define a new arr
    let newArr = []
    //split string
    let ogArr = string.split(' ')
    //forEach of ogarr...if last element of newArr !== it, push to newArr
    ogArr.forEach((x) =>{
      if (x !== newArr[newArr.length - 1])
        newArr.push(x)
    })
    //return newArr.join(' ')
    return newArr.join(' ')
  }