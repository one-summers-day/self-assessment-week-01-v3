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
  this.parent;
};

Tree.prototype.map = function(mappingFunction) {
  var newTree;
  //take in function
  //create new tree class
  //return out new tree with changed values
  mapRootAndBranches(tree) {
    //base case run callback function on value in tree
    var currentTree = new Tree(mappingFunction(tree.value));
    if(tree.parent === undefined) {
      newTree = currentTree;
    }
    if(tree.parent) {
      var branchOfNewTree = newTree.addChild(1);
      branchOfNewTree = currentTree;
    }

    //need some way of traversing into the tree while also making new branches
    //not sure exactly how to do it
    for(var i = 0; i < tree.children.length; i++) {
      ; //must add new branch for tree if children exist

      mapRootAndBranches(tree.children[i]);
    }

    //recurse through children and call function on each
    //mapRootAndBranch must create new tree not sure how to do with helper

  }


  //recurses through old tree and run function on each value in branches
  mapRootAndBranches(this);

  return newTree;

};

Tree.prototype.addChild = function(numberOfBranches) {
  for(var i = 0; i < numberOfBranches; i++) {
    var currentBranch = new Tree(Math.floor(Math.random() * 10));  //created addChild
    currentBranch.parent = this; //associate with the corresponding parent
    this.children.push(currentBranch);
  }
}



