
function getPermutations(str) {
  if (str.length <= 1) {
    return new Set(str);
  }

  var allCharsExceptLast = str.slice(0, -1);
  var lastChar = str[str.length-1];

  var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  var permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(function(permutationsOfAllCharsExceptLast){
    for (var position = 0; position <= allCharsExceptLast.length; position++ ) {
        var permutation = permutationsOfAllCharsExceptLast.slice(0, position) + lastChar + permutationsOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
    }
  });
  return permutations;
}



console.log(getPermutations("cat"));
