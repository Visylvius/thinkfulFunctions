// Return an array with all values in an object
var obj = {
  name: 'Loren',
  location: 'San Francisco',
  food: 'steak'
};

function getValues(obj) {
  var emptyArr = [];
  for (var key in obj) {
    emptyArr.push(obj[key]);
  }
  return emptyArr;
}

console.log(getValues(obj));

// create a function that returns an array of keys in an obj
// then returns the values after the keys


var obj = {
  name: 'Loren',
  location: 'San Francisco',
  food: 'steak'
};

function keysBeforeValues(object) {
  var objKeys = Object.keys(object);
  for (var key in object) {
    objKeys.push(obj[key]);
  }
  return objKeys;
}

console.log(keysBeforeValues(obj));

//Match array to Object Keys return true if the array's
//values are equal to the object's keys


var values = {
  name: 'Loren',
  location: 'San Francisco',
  food: 'steak'
};
var valuesKey = ['name', 'location', 'food'];
function matchArray(obj, arr) {
  var objKeys = Object.keys(obj);
  for (var j in objKeys) {
    for (var i in arr) {
      if(objKeys[j] === arr[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

matchArray(values, valuesKey);
