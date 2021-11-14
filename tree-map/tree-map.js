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

//First need to add addChild method
Tree.prototype.addChild = function(value) {
  //Instantiate new tree and set to child
  child = new Tree();
  //Set child.value to passed in value
  child.value = value;
  //Push child to existing tree children array
  this.children.push(child);
}

// Tree.prototype.map = function(cb) {
//   //instantiate new Tree
//   var newTree = new Tree();
//   //perform cb function on current node and set to newTree val
//   newTree.value = cb(this.value);
//   //recurse through old tree children
//   const treeRecurse = function(cb, node) {
//     let value = cb(node.value);
//     newTree.addChild(value);
//     for (let child in node.children) {
//       treeRecurse(cb, child);
//     }
//   }
//   //Initiate recursion by going through each of this.node's children
//   //There's definitely a more elegant way of doing this
//   for (let i = 0; i < this.children.length; i++) {
//     treeRecurse(cb, this.children[i]);
//   }
//   return newTree;
// }

Tree.prototype.map = function(cb) {
  //instantiate new Tree
  var newTree = new Tree();
  //treeRecurse(cb, this)
  //perform cb function on current node and set to newTree val
  newTree.value = cb(this.value);
  //recurse func
  const treeRecurse = function(cb, node) {
    //Add new child to newTree
    newTree.addChild(cb(node.value));
    node.children.forEach(() => {
      treeRecurse(cb, child);
    })
  }
  //Initiate recursion by going through each of this.node's children
  //There's definitely a more elegant way of doing this
  this.children.forEach(()=> {
    treeRecurse(cb, this.children[i]);
  })
  return newTree;
}

