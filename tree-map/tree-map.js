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

// the map method we are to implement is basically a function that iterate through an existing tree and apply the mapping function to each value in the tree and generate a new tree.

// input: value for the initial root node
// output: a separate tree with all its values altered via the mapping function

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

// create a method to add the children
Tree.prototype.addChild = function (value) {
  //declare a new child variable and set it to a new Tree instance
  let newChild = new Tree(value);
  // push the new child node (array) into the children array
  this.children.push(newChild);
};

// create the map method
Tree.prototype.map = function (func) {
  // use the mapping function to alter the value
  let alteredValue = func(this.value);
  // declare a variable for a separate tree and apply the altered value for the root node
  let mappedTree = new Tree(alteredValue);

  // now we need to iterate over the tree since children values are not altered yet

  // use a loop to iterate through the children array
  for (let j = 0; j < mappedTree.children.length; j++) {
    // apply the mapping function to each value in the children and invoke it recursively
    mappedTree.children[j].value = this.children[j].map(func)
  }
  // return the result tree structure
  return mappedTree;
};
