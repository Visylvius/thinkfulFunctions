var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function binarySearch(arr, target) {
  var endIndx = arr.length-1;
  var midpoint = Math.floor((arr.length-1)/2);
  var element= arr[midpoint];

  if (element === target) {
    return true;
  }
  else if (arr.length === 0 ){
    return false;
  }
  else {
    if (element < target) {
      arr = arr.slice(midpoint+1);
      return binarySearch(arr,target);
    }
    else {
      arr = arr.slice(0,midpoint+1);
      return binarySearch(arr,target);
    }
  }
}
binarySearch(myArray,3);
  // returns true if target found in arr, else return false
  // Implement the solution as a recursive function.

  // Recursion rules:
  // Return on termination condition(s)
  // Call self with subset of problem set

  /*
  Pseudo code:

  1) find mid point element in array
  2) if element === target, return true
  3) if array length === 0, return false
  4) check if element is greater or less than target
  5) call binarySearch on either the top or bottom half of array

  */
