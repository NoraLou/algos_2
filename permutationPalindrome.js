
// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


function permutationPalindrome (str) {
  //any length of pairs, at most 1 center letter;
  var unpaired = {};
  for (var i = 0; i < str.length; i++) {
    var currChar = str[i];
    if (!unpaired[currChar]) {
      unpaired[currChar] = currChar;
    } else {
      delete unpaired[currChar];
    }
  }
  return Object.keys(unpaired).length === 1;
}

//TODO: import Lodash, underscore;

console.log(permutationPalindrome("civic"));
console.log(permutationPalindrome("livci"));
//O(n) runtime, O(n) space
