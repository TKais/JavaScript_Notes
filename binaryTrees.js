//A binary search tree is a doubly linked list that contains some data and pointers to two nodes. A binary search tree node’s pointers are typically called “left” and “right” to indicate subtrees of values relating to the current value. A simple JavaScript implementation of such a node is as follows:


var node = {
  value: 125,
  left: null,
  right: null
}

//Binary search trees are a hierarchical tree structure where the first node becomes the root node and each additional value is an ancestor of that root. 

//NODES ARE ORDERED BASED ON THE VALUE THEY CONTAIN: any values that are part of a node’s left subtree are always less than the node’s value and any values in the right subtree are always greater than the node’s value

//There can be no duplicates in a binary search tree

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype = {

  add: function(value){
    var node = {
      value: value,
      left: null, 
      right: null
    }

    var current; //undefined, give it no value right off the bat 
  },

  contains: function(value){
    var found = false;    //returns true if the value passed in is present in the tree and false if not
    var current = this.root;

    if(typeof current !== 'undefined' && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else{
        found = true;
      }
    } 
    return found;
  },

  remove: function(value){
  },

  size: function(){
  },

  toArray: function(){
  },

  toString: function(){
  }
};