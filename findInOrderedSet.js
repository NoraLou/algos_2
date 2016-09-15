var mySortedArr = [1,2,3,3,5,6,8,9,11,14];


function findInSortedArr (target, sortedArr) {
    var floor = -1;
    var ceiling = sortedArr.length;
    while (floor + 1 < ceiling) {
        var distance = ceiling - floor;
        var halfDistance = Math.floor(distance/2);
        var guessIndex = floor + halfDistance;
        if (sortedArr[guessIndex] === target ) {
            return true;
        }
        if ( sortedArr[guessIndex] < target ) {
            floor = guessIndex;
        } else {
            ceiling = guessIndex
        }
   }
   return false;
};


console.log(findInSortedArr(9, mySortedArr));
