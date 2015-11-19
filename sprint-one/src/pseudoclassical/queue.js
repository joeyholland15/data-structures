var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 1;
  this.last = 1;
  this.storage = {};
};

Queue.prototype.size = function () {
  return this.last - this.first;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
}

Queue.prototype.dequeue = function() {
  if(this.last - this.first > 0) {
    var holder = this.storage[this.first];
    delete this.storage[this.first];
    this.first++
    return holder; 
  }
}


