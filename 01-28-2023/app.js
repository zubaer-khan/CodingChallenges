Our football team has finished the championship.

// 

function points(games) {
    counter = 0
    for (i = 0; i < 10; i++){
      if (games[i][0] > games[i][2]) {
        counter += 3
      } else if (games[i][0] < games[i][2]) {
        counter += 0
      } else if (games[i][0] === games[i][2]) {
        counter++
      }
    }
    return counter
  }