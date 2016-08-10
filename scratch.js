// Given an arrayOfInts, find the highestProduct you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

// We also keep track of the lowest number and highest number. If the current number times the current highest—or the current lowest, if current is negative—is greater than the current highestProductOf2, we have a new highestProductOf2. Same for lowestProductOf2.

// So at each iteration we're keeping track of and updating:

// highestProductOfThree
// highestProductOf2
// highest
// lowestProductOf2
// lowest

var myArr = [-10, -10, 1, 3, 2]; // 300


function getHighestOfThree (arr) {
    var highestOf2 = arr[0] * arr[1],
        lowestOf2
        highestProductOf3 = highestProductOf2 * arr[2]
        lowest,
        greatest;

    var greatest = Math.max.apply(null, arr);
    var least = Math.min.apply(null, arr);

    for(var i = 2; i < arr.length; i++) {
        if (arr[2] > greatest)
    }

}


console.log(getHighestOfThree(myArr));


















