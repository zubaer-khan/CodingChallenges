// A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.

// The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.

// The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

// Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.

// The first entry of the array is correct, and does not require an adjustment.
// The array will never be empty.

function cleanedCounts(data) {
    // receive a sorted array that is supposed to be non-decreasing but has an error of undercounting by 1 at random
    // return a new, fixed array with the count never decreasing
    // [2,1,2] => [2,2,2]
    
    // assign an array to the data using spread operator
    // for loop
    // if there are any numbers < the previous number, add 1 to that number
    // return array
    
    let arr = [...data];
    
    for(let i = 0; i < data.length; i++) {
      if(arr[i] < arr[i-1]) {
        arr[i] += 1;
      }
    }
    
    return arr;
  }