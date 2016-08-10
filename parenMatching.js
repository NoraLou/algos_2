var myTest = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."


// Write a function that, given a sentence like the one above,
//along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

//it is matched when counts of open and closed parens are even

function parenMatching (firstIndexParen, sentence) {

  var parenCount = 1;

  for(var i = firstIndexParen+1; i < sentence.length; i++ ) {
    if ((sentence[i] === '(') || (sentence[i] === ')')) {
        parenCount++
    }
    if ( parenCount % 2 === 0) {
      return i
    }
  }
  return false;
}

console.log(parenMatching(10, myTest))
