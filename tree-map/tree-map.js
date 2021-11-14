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
  newTree.value
  newTree.children[0].value
  newTree.children[1].value
  newTree.children[0].children[1].value
  newTree.children[1].children[1].value
  root1.value
  */
 // 2
 // 4
 // 6
 // 10
 // 14
 // still 1

  //what does map need.
  //push children into tree
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (value) {
  const newBranch = new Tree(value);
  // console.log(this);
  this.children.push(newBranch);
  return newBranch;
}

//having trouble creating a clone of 'this' so that the mapping doesn't overwrite the original.
Tree.prototype.map = function (func, node = this) {
  if (node === null) {
    return;
  }
  node.value = func(node.value);
  for (let i = 0; i < node.children.length; i++) {
    this.map(func, node.children[i]);
  }
  return this;
}

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
});
console.log(root1);
console.log(newTree);
