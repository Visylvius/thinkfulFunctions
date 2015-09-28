var names = ['bob', 'brenda', 'ishamel'];
var complement = ' is great!';
function complementGiver(arr, str) {
  var blankArr = [];
  for (var i = 0; i < arr.length; i++) {
    blankArr.push(arr[i] + str);
  }
  return blankArr;
}
console.log(complementGiver(names, complement));

var count = 0;
function counter(num) {
  num += 1;
}
console.log(counter(count));
