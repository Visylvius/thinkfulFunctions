
var myArr = [1,2,3,4,5];
function countDown(arr, num) {
  if (num === undefined) {
    num = arr.length - 1;
  }
  console.log(arr[num]);
  if (num === 0 ) {
    return 'done';
  }
  return countDown(arr, num -= 1);
}
countDown(myArr);
// make the array go first to last

function countUp(arr, num) {
  if (num === undefined) {
    num = 0;
  }
  if (num !== arr.length) {
    console.log(arr[num]);
    return countDown(arr, num + 1);
  } else {
    return 'done';
  }
}
countUp(myArr);
