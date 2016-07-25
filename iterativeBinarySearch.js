//FIX THIS
var nums = [3,9,11,13,16,20,45];

function binarySearch(target, nums) {

    //floor index is index to the LEFT of our array, indices must be at least one more than it, this walls in the values to the left
    var floorIndex = -1;
    // wall to the right...
    var ceilingIndex = nums.length;

    while(floorIndex + 1 < ceilingIndex) {
        var distance = ceilingIndex - floorIndex;

        //find the mid point to start the division - whole numbers only!!!
        var halfDistance = Math.floor(distance/2);
        //estimate a mid-point
        var guessIndex = floorIndex + halfDistance;

        var guessIndex = nums[guessIndex];

        //three conditions
        //1. we have found target
        if (guessIndex === target) {
            console.log("yurp")
            return true;
        }

        //2.
        //if target is less than guessIndex , ceiling moves down to guessIndex, we split problem in half
        if (target < guessIndex) {
            ceilingIndex = guessIndex;

        //3. target must be greater than guessIndex, move floorindex up to guessIndex, we split problem in half
        } else {
            floorIndex = guessIndex
        }
    }
}

console.log(binarySearch(9, nums))
