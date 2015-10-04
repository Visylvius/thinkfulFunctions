var myArray = [1,2,3,4,5,6,7,8,9,10];
function shuffle (cards) {
  for (var i = 0; i < myArray.length; i++) {
    Math.floor(Math.random(myArray[i]));
  }
  return cards;
}




function each (collection, callback) {
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

function even(num) {
if (num % 2 === 0) {
  return true;
}
}
function some(collection, callback) {
var result = false;
each(collection, function(element) {
    if(callback(element)) {
       result = true;
    }
});
return result;
// if some of the items in this collection return true on the callback, then some returns true
}
  some(myArray, even);

function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if(!callback(element)) {
      result = false;
    }
  });
  return result;
// if all the items are true then return true on the callback
}
function reduce(collection, accumulator, startVal ) {
var accumulatorVal = startVal;
  each(collection, function(element) {
    if(accumulatorVal === undefined) {
      accumulatorVal = element;
    }
      accumulatorVal = accumulator(accumulatorVal, element);
   });
   return accumulatorVal;
}




function contains(collection, target) {
  return reduce(collection, function(accumulatorVal, element) {
    if (accumulatorVal) {
      return true;
    } else {
        return element === target;
    }}, false);
}

  function add(a,b){
  return a + b;
}
}
