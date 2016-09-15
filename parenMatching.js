var myTest = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."


// Write a function that, given a sentence like the one above,
//along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
//it is matched when counts of open and closed parens are even


//O(n) time &&  O(1) space
// just keep track of if we have one open bracket

function parenMatching (firstIndexParen, sentence) {
  var anyOpen = 1;

  for (var i = firstIndexParen + 1 ; i < sentence.length; i++ ) {
      if (sentence[i] === "(") {
        anyOpen++;
      }
      if ( (sentence[i] === ")") && (anyOpen > 0) ) {
        anyOpen--;
      }

      if (anyOpen === 0) {
        return i;
      }
  }
  throw new Error('No closing parenthesis :(');
};

console.log(parenMatching(10, myTest))
