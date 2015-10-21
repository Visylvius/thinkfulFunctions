
function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
      for (var key in collection) {
        callback(collection[key]);
      }
    }
}

function even(x) {
  return x % 2 === 0;
}
function mult(x, y) {
  return x * y;
}
function add(x,y) {
  return x + y;
}
function sub(x,y) {
  return x -  y;
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}
