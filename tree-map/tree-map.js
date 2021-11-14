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

//Step 1:
var Tree = function(value) {
  this.value = value;
  //Step 1.1: Make a children array keeping track of all the children originating from a particular element
  this.children = [];

  //Step 1.2: Make an array of all tree elements so I don't have to use recursion. XD
  this.family = [this];

  return this;

};

//Step 2: Implement a addChild() function which allows for the tree to grow
Tree.prototype.addChild = function(value) {
  //Step 2.1: Instantiate a new child
  let child = new Tree(value);

  //Step 2.2: Update family and children for this and pass family onto child (all tree nodes have the same family property)
  this.family.push(child);
  this.children.push(child);
  child.family = this.family;

  return child;
};

//Step 3:
Tree.prototype.map = function(myAwesomeFunction) {
  //Step 3.1: Instantiate a new tree that's identical to the one we have
  let myAwesomeReturnValue = new Tree(0);
  myAwesomeReturnValue.value = this.value;
  myAwesomeReturnValue.children = this.children;
  myAwesomeReturnValue.family = this.family;

  //Step 3.2: Use some recursion to run myAwesomeFunction through all of the children and all of the family.
  function revengeOftheRecursion(treeElement) {
    if (treeElement.children !== []){
      for (let i = 0; i < treeElement.children.length; i++) {
        revengeOftheRecursion(treeElement.children[i])
      }
    }
    else {
      treeElement.value = myAwesomeFunction(treeElement.value);
    }
  }
  return myAwesomeReturnValue.children[0];
}

let myTree = new Tree(1);
