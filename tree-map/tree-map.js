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
  let newBranch = new Tree(value)
  this.children.push(newBranch)
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === value) {
      return this.children[i]
    }
  }
}

Tree.prototype.contains = function(target) {
  let ifContains = false;
  if (this.value === target) {
    return true;
  }
  let innerFunction = function(children, target) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        ifContains = true;
      } else {
        innerFunction(children[i].children, target)
      }
    }
  }
  innerFunction(this.children, target)
  return ifContains;
}


Tree.prototype.map = function(func) {
  var newTree = new Tree()
  //if root value exists
  if (this.value) {
    //invoke func on the value
    newTree.value = func(this.value)
  }
  //otherwise create a recursion function that takes in childrens and func as paramter
  let innerFunction = function(childrenArray, func) {
    //iterate through the children array
    for (var i = 0; i < childrenArray.length; i++) {
      //if the children value exists at the iteration
      if (childrenArray[i].value) {
        //invoke func on each child's value
        newTree.children.push(func(childrenArray[i].value))
      } else {
        //otherwise, use recursion that iterates through the children's children
        innerFunction(childrenArray[i].children, func)
      }
    }
  }
  //call the recursive function on the root's children
  innerFunction(this.children, func)
  return newTree
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
})
console.log(newTree.value) // 2
console.log(newTree.children[0].value) // 4
console.log(newTree.children[1].value) // 6
console.log(newTree.children[0].children[1].value) // 10
console.log(newTree.children[1].children[1].value)// 14
console.log(root1.value) // still 1