// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // recieve a URL as a string
    // return the same url but with anything including and after the "#" removed
    // example removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com'
    // find indexOf '#' in url
    // index > 0 ? slice(0,index) : url
    let index = url.indexOf("#")
    return index > 0 ? url.slice(0, index) : url
  }