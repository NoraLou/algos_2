
//implement a basic binary search to find a target in a sorted array.
// var mySortedArr = [1,2,3,3,5,6,8,9,11,14];
// var myTarget = 9;

// function findInSortedArr(target, arr) {
//     var floorIndex = -1;
//     var ceilingIndex = arr.length;

//     while (floorIndex + 1 < ceilingIndex ) {

//         var leftToSearch = (ceilingIndex - floorIndex)
//         var guessIndex =  Math.floor(leftToSearch/2);

//         if (arr[guessIndex] === target) {
//             return true;
//         } else if (target < arr[guessIndex]){
//             ceilingIndex = guessIndex
//         } else {
//             floorIndex = guessIndex
//         }
//     }
//     return false;
// };

// findInSortedArr(9, mySortedArr))

function binarySearch(target, nums) {
    // see if target appears in nums

    // we think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we /don't/ mean "the last index")
    var floorIndex = -1;
    var ceilingIndex = nums.length;

    // if there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {

        // find the index ~halfway between the floor and ceiling
        // we use integer division, so we'll never get a "half index"
        var distance = ceilingIndex - floorIndex;
        var halfDistance = Math.floor(distance / 2);
        var guessIndex = floorIndex + halfDistance;

        var guessValue = nums[guessIndex];

        if (guessValue === target) return true;

        if (guessValue > target) {

            // target is to the left
            // so move ceiling to the left
            ceilingIndex = guessIndex;

        } else {

            // target is to the right
            // so move floor to the right
            floorIndex = guessIndex;
        }
    }

    return false;
}

binarySearch





