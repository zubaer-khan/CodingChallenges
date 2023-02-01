// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

//P: Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
//R: Return time in milliseconds after midnight
//E: h = 0
//   m = 1
//   s = 1
//   result = 61000
//P:

function past(h, m, s){
    //if/else with constraints on input
    if ((0 <= h <= 23) && (0 <= m <= 59) && (0 <= s <= 59)) {
        //calculate time in milliseconds
      let milliseconds = (h * 3600000) + (m * 60000) + (s * 1000)
      return milliseconds
    } else //account for invalid times
      alert("enter a valid time. format (h,m,s)")
  }