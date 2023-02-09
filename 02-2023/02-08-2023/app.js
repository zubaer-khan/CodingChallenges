// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // year divided by 100
    // if it is anything other than a whole integer(??), round up to the the next whole integer
    // if the result is a whole integer, that is the century
    return Math.ceil(year / 100)
  }