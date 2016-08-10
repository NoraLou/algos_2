function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.add = function(value) {

  //make newNode of value
  var newNode = {
    value : value,
    left: null,
    right: null
  };

   //no value at root assign value to root
  if (!this._root) {
    this._root = newNode;
    return;

  } else {
    var current = this._root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      }
      else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      } else {
        //duplicate value
        return null;
      }
    }
  }
};

myBalancedTree = new BinaryTree();
//root
myBalancedTree.add(32);
//make Balanced
myBalancedTree.add(13);
myBalancedTree.add(11);
myBalancedTree.add(9);
myBalancedTree.add(38);
myBalancedTree.add(42);
myBalancedTree.add(60);

console.log(
  JSON.stringify(myBalancedTree)
);


//depth first traversal- iterative- use stacks
function isBinaryTreeBalanced(treeRoot) {
    var depths = [],
        nodes = [];

    //root has depth 0
    nodes.push([treeRoot, 0]);

    while(nodes.length) {
      var nodePair = nodes.pop();
      var node = nodePair[0],
          depth = nodePair[1];
    }

    //case leaf node
    if (!node.left && !node.right) {
        //if this is new depth level
        if ( depths.indexOf(depth) === -1 ) {
          depths.push(depth);
        }
        // it is unbalanced
          //1. if more that 2 depths,  2. if there are two depths farther than one apart in difference.
        if ( (depths.length > 2) || (depths.length === 2 && Math.abs(depths[1] - depths[0]) > 1) ) {
          return false;
        }

    //case regular node- iterate down
    } else {
       if (node.left) {
          nodes.push([node.left, depth + 1]);
       }

       if (node.right) {
          nodes.push(node.right, depth + 1);
       }
    }
    return true;
};


console.log(isBinaryTreeBalanced(myBalancedTree));





































