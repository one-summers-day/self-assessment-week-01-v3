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

// input is a function that iterate over root and child nodes and changes their values
// output: object: tree with same rootNode/childNodes (values are doubled)
Tree.prototype.map = function(mappingFunc) {
  // generate a new tree (don't modify original tree) with root node value after mappingFunc
  var result = new Tree(mappingFunc(this.value));
  // somehow I need to iterate over original tree(this)
  // iterate through each childNode
  // transfer childNodes with mappingFunc values to result
   // iterate over original rootnode
   for (var key in this) {
    // iterate over original children array
    for (var i = 0; i < this.children.length; i++) {
      // apply mappingFunc to childNode value
      var child = this.children[i];
      // have result children equal mappingFunc child.value
      child.value = mappingFunc(child.value);
    }
   }

    return result;



}

// create addChild function
Tree.prototype.addChild = function(value) {
  // create a child node with input value
  var childNode = new Tree(value);
  // push childNode to rootNode array
  this.children.push(childNode);
}



