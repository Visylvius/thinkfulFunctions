var arr = [1,2,3,4,5];

function addTen (x) {
 return x+10;
}

function each (collection, callback) {
 if (Array.isArray(collection)) {
   for (var i = 0; i< collection.length; i++){
     callback (collection[i]);
   }
   return collection;
 }
else {
 for (var key in collection){
   if (collection.hasOwnProperty(key)){
     callback (collection[i]);
     }
   }
 return collection;
 }
}

function map (collection, callback) {
 var mapped = [];
 each (collection, function(element){
   mapped.push(callback(element));
 })
 return mapped;
}
