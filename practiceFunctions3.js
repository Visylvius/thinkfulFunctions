function modifyArray(arr, callback) {
  if(callback.constructor === 'function') {
    arr = arr.toString();
    return callback(arr);
  } else {
    return arr;
  }
}

function lowerCase(str) {
  str = str.toLowerCase();
  return str;
}
function upperCase(str) {
  str = str.toUpperCase();
  return str;
}
function slice(str) {
  str = str.slice(4,-2);
  return str;
}
console.log(modifyArray(['hello', 'my', 'name'], upperCase));

function map(arr, callback) {
  var mapped = [];
  for (var i = 0; i < arr.length; i++) {
    mapped.push(callback(arr[i]));
  }
  return mapped;
}
