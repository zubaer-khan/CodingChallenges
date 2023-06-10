// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
    // receive two arguments, integer for salary amount and a boolean regarding if a bonus is received or not
    // return final salary (including * 10 for bonus) with "\u00A3" appended in front
    // ex bonusTime(10000, true) => '£100000'
    // use a ternary operator to check if bonus is true
    // if so multiply salary by 10 and append to \u00A3, else return salary plus \u00A3
      
      return bonus === true ? '\u00A3' + (salary * 10) : '\u00A3' + salary
    }