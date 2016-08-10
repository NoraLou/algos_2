var rectA= {
    leftX: 4,
    //bottomY: 5,
    width: 2,
    //height: 4,
};

var rectB= {
    leftx: 8,
    //bottom
    width: 3
};


//find overlap along x-axis
function findXOverlap(rectA, rectB) {
  //x index whose startgin point greater in value, more to the right.
  var highestStartPoint = Math.max( rectA.leftX, rectB.leftx );
  //index value of the first horizontal line to end
  var lowestEndPoint = Math.min(  (rectA.leftX + rectA.width), (rectB.leftx + rectB.width) )

  var overlapLength = lowestEndPoint - highestStartPoint;

  if (overlapLength >= 0 ) {
    var overlapStart = highestStartPoint;
    return [ overlapStart, overlapLength ]
  } else {
    return false;
  }
};

console.log(findXOverlap(rectA, rectB));

