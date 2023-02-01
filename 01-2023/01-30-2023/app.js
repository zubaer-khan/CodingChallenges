// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//using a for-loop
// function doubleChar(str) {
//     let newStr = ''
//     for (i = 0, n = str.length; i < n; i++) {
//       newStr += str[i] + str[i]
//     }
//     return newStr;
//   }
//refactored using array and string methods
  const doubleChar = str => str.split('').map(x => x + x).join('')