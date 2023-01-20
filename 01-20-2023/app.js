//Given a non-empty array of integers, return the result of multiplying the values together in order. 

//Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     let result = 1;
//     for (i = 0, n = x.length; i < n; i++) {
//       result = result * x[i]
//     }
//     return result
//   }
//refactor using reduce method
const grow = x => x.reduce((x, y) => x * y, 1)