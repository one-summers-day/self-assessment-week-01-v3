/**
  *
  * Implement a `map` method and any other necessary methods on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

var Tree = function(value) {
  this.value = value;
  this.children = [];

};

Tree.prototype.addChild = function(value) {
  //store a new instance of Tree object into a childArray.
  //then pushed into the children array in tree node
  //return the value that ws added
  var childArray = this.children;
  childArray.push(new Tree(value));
  return new Tree(value);
};

Tree.prototype.map = function(func)  {
  //accepts a func as an argument that will iterate over children Array and add new node,
  //will stop when a node no longer has any child nodes.
  var newTreeObj = new Tree();
  //set the value of a new tree by calling callback func on this value
  newTreeObj.value = func(this.value);
  var childArray = this.children;
  if (childArray.length > 0) {
    for (var i = 0; i < childArray.length; i ++) {
      //somehow returns a callback func function
    }
  }
  //somehow returns tree with new values
  return newTreeObj; //?
};



