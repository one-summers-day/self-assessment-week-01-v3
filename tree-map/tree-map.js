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

Tree.prototype.map = function(fn) {
  // var newvalue = fn(this.value)
  // //set new tree's value with that new value from function
  // var newTree1 = new Tree(newvalue);

  // if this.children has values, run function on this.chidlren and push the reuslt child {} onto newTree.child
  // //helper funciton
  var changeValue = function(currentTree) {
    //run function with the value
    var newvalue = fn(currentTree.value)
    //set new tree's value with that new value from function
    var newTree1 = new Tree(newvalue);
    //if current tree has any children, run helper function to recurse through
    if (currentTree.children.length !== 0) {
      for (var i = 0; i<currentTree.children.length;i++){
        newTree1.children.push(changeValue(currentTree.children[i]))
      }
    }
    return newTree1
  }
  return changeValue(this)
}

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
}


//tests
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

var newTree = root1.map(function (value) {
return value * 2;
})

console.log(root1.children[0])
console.log(newTree.value) // 2
console.log(leaf4.value)
// console.log(newTree.children[0].value) // 4
// console.log(newTree.children[1].value) // 6
// console.log(newTree.children[0].children[1].value) // 10
// console.log(newTree.children[1].children[1].value) // 14
// console.log(root1.value) // still 1