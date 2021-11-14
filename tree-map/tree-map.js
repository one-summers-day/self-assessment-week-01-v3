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
  var newChild = new Tree(value);
  this.children.push(newChild);
  return newChild;
};

Tree.prototype.map = function(func) {

  if (typeof func === 'function') {

    var newTree = new Tree(func(this.value));

    var childHelper = function(child, func) {
      return new Tree(func(child.value));
    }

    if (this.children.length > 0) {
      for (let i = 0; i < this.children.length; i++) {
        this.map(newTree.children.push(childHelper(this.children[i], func)));
      }
    }

    // var innerFunction = function(tree) {
    //   if (tree.children.length === 0) {
    //     newTree.children.push(childHelper(tree, func));
    //   } else {
    //   for (let i = 0; i < tree.children.length; i++) {
    //     innerFunction(tree.children[i]);
    //   }
    // };

    // innerFunction(this);



    // for (let i = 0; i < this.children.length; i++) {
    //   this.map(newTree.children.push(childHelper(this.children[i], func)));
    // }


    return newTree;
  }

};


var root1 = new Tree(1);
var branch2 = root1.addChild(2);
console.log(root1);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
});
console.log('New Tree:', newTree);

console.log(
newTree.value, // 2
newTree.children[0].value, // 4
newTree.children[1].value, // 6
// newTree.children[0].children[1].value, // 10
// newTree.children[1].children[1].value, // 14
// root1.value
)