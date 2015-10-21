
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
function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if(callback(element)) {
      result = true;
    }
  return result;
  });
}
function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if(!callback(element)) {
      result = false;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}

function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if(callback(element)) {
      result.push(element);
    }
  });
  return result;
}
function reduce(collection, accumulator, initialVal) {
  accumulatorVal = initialVal;
  each(collection, function(element) {
    if (accumulatorVal === undefined) {
      accumulatorVal = element;
    }
    accumulatorVal = accumulator(accumulatorVal, element);
  });
  return accumulatorVal;
}
