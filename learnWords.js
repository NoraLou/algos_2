var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];


// function findRotationPoint(words) {
//     const firstWord = words[0];

//     var floorIndex = 0;
//     var ceilingIndex = words.length -1;

//     while(floorIndex < ceilingIndex) {
//         var guessIndex = Math.floor(floorIndex + ((ceilingIndex-floorIndex)/2))

//         if ( firstWord < words[guessIndex] ) {
//             ceilingIndex = guessIndex
//         } else {
//             floorIndex = guessIndex
//         }

//         if (floorIndex + 1 === ceilingIndex) {
//             return ceilingIndex;
//         }
//     }

// }

var myWords = ['d','e', 'f', 'a', 'b', 'c']

function findRotationPoint(words) {
    const firstWord = words[0];

    var floorIndex = 0;
    var ceilingIndex = words.length - 1;

    while (floorIndex < ceilingIndex) {

        // guess a point halfway between floor and ceiling
        var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        // if guess comes after first word
        if (words[guessIndex] > firstWord) {
            // go right
            floorIndex = guessIndex;
        } else {
            // go left
            ceilingIndex = guessIndex;
        }

        // if floor and ceiling have converged
        if (floorIndex + 1 === ceilingIndex) {

            // between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return ceilingIndex;
}


console.log(findRotationPoint(myWords))


//why in your example of the iterative binary search are you using the whil


//rotation point will be first in alphabetical order
// my attempt that results in a never ending loop
// function findRotationPoint(arr) {
//     var floorIndex = -1,
//         ceilingIndex = arr.length,
//         workingMiddle;

//     //need at least three for binary search
//     while (floorIndex + 1 < ceilingIndex) {

//         workingMiddle = floorIndex + Math.floor(ceilingIndex/2);

//         //all lessThan values are to the left
//         if ( arr[0] < arr[workingMiddle]) {
//             //cut problem in half to the left
//             ceilingIndex = workingMiddle;
//         } else {
//             floorIndex = workingMiddle;

//         }

//     }

//     //you only have two left now choose the least
//     // var rotationPoint = floorIndex < ceilingIndex ? floorIndex : ceilingIndex;
//     // return arr[rotationPoint];

//     return [floorIndex, ceilingIndex];

// }


// console.log(findRotationPoint(words));


//'ptolemaic', 'asymptote'






