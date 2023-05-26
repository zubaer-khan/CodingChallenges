// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.



function initials(n){
    let name = ''
    n = n.split(' ')
    for(i = 0; i < n.length - 1; i++){
      name += n[i][0].toUpperCase() + '.'
    }
    let last = n[n.length - 1].charAt(0).toUpperCase() + n[n.length - 1].slice(1)
    return `${name}${last}`
  }