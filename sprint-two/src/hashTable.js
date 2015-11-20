

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  var obj = {};
  obj[k] = v;
  this._storage.set(index, obj); 

  //if(this_.storage.get(index) === undefined) {
//     var array = [];
//     array.push({k:v});
//   } else {
//     this._storage.get(index).push({k:v}); 
//   }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index); 

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var returnVal = this._storage.get(index);
  this._storage.set(index, undefined); 
  return returnVal;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


