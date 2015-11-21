   

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  if(this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push([k,v]);
    this._storage.set(index, bucket); 
  } else {
    var bucket = this._storage.get(index);
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k,v]); 
      }
    } 
  }
};

HashTable.prototype.find = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i<bucket.length; i++) {
    if(k === bucket[i][0]) {
      return i; 
    }
  }
}

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var position = this.find(k);
  if(position !== undefined) {
    return this._storage.get(index)[position][1]; 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var position = this.find(k);
  if(position !== undefined) {
    var holder = this._storage.get(index)[position][1]; 
    this._storage.get(index).splice(position, 1);
    return holder; 
  }
};







/*
 * Complexity: What is the time complexity of the above functions?
 */


