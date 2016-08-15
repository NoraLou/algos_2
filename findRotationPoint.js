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


function findRotationPoint(words) {
  const firstWord = words[0];
  var floorIndex = 0;
  var ceilingIndex = words.length -1

  while(floorIndex < ceilingIndex) {
    var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex)/2) );

    if( firstWord < words[guessIndex] ) {
      floorIndex = guessIndex
    } else {
      ceilingIndex = guessIndex
    }

    if (floorIndex + 1 === ceilingIndex) {
      break;
    }
  }
  return ceilingIndex;
}

console.log(findRotationPoint(words));










