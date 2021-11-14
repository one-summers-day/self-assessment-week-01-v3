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


/**
 * Tree object constructor
 * @param {number} value - tree instance value
 */
const Tree = function(value) {
  this.value = value;
  this.children = [];
};

/**
 * add a child node to the current Tree (this)
 * @param {number} value - value
 * @returns {object - Instance of Tree} - returns the newSubTree added to this Tree
 */
Tree.prototype.addChild = function(value) {
  // create new subTree with the passed in value
  const newSubTree = new Tree(value);
  // push new subTree to this tree instance children
  this.children.push(newSubTree);
  // return newSubTree
  return newSubTree;
};

// add map method
Tree.prototype.map = function(cb) {
  // create new Tree and add the first subTree
  const newTree = new Tree(cb(this.value));
  // add new tree children recursively calling map on each children
  for (let i = 0; i < this.children.length; i++) {
    // newTree.chidren[i] will only be assigned a value once treeChildren.map(cb) finishes executing
    const treeChildren = this.children[i];
    newTree.children[i] = treeChildren.map(cb);
  }
  // return the new tree
  return newTree;
};



// tests
const root1 = new Tree(1);
const branch2 = root1.addChild(2);
const branch3 = root1.addChild(3);
const leaf4 = branch2.addChild(4);
const leaf5 = branch2.addChild(5);
const leaf6 = branch3.addChild(6);
const leaf7 = branch3.addChild(7);

const newTree = root1.map(function (value) {
  return value * 2;
});

console.log(newTree)

console.log(newTree.value); // 2
console.log(newTree.children[0].value); // 4
console.log(newTree.children[1].value); // 6
console.log(newTree.children[0].children[1].value); // 10
console.log(newTree.children[1].children[1].value); // 14
console.log(root1.value); // still 1