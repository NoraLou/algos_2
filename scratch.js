
// implement a basic binary search to find a target in a sorted array.
var mySortedArr = [1,2,3,3,5,6,8,9,11,14];
var myTarget = 9

function basicBinarySearch(target, arr) {
  var floor = -1;
  var ceiling = arr.length;

  while (floor + 1 < ceiling) {
    var distance = ceiling - floor;
    var halfDistance = Math.floor(distance/2);
    var guessIndex = floor + halfDistance

    if (arr[guessIndex] === target) {
      return true;
    }
    if ( arr[guessIndex] < target) {
      floor = guessIndex;
    } else {
      ceiling = guessIndex;
    }
  }
  return false;
};

console.log(basicBinarySearch(9, mySortedArr));



