// let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

// 1. must be matched
// 2. must be nested --- pattern of openers should be same of pattern of closers when reversed

'use strict'


function bracketValidator(str) {

  var openersToClosers = {
    "{" :" }",
    "[" : "]",
    "(" : ")"
  };

  var openers = new Set(['{', '(', '[']);
  var closers = new Set([')', '}', ']']);

  var openersStack = [];

  for(var i = 0; i < str.length; i++ ){
    var currChar = str.charAt(i);
    //is this an opener
    if (openers.has(currChar)) {
        openersStack.push(currChar);
    //if this is closer, check most recent opener
    } else if(closers.has(currChar)) {

        var closestOpen = openersStack[openersStack.length-1];
        if ( openersToClosers[closestOpen] === currChar) {
            openersStack.pop();

          if( openersStack.length === 0 ) {
             return true;
          }
        }
    }
  }
  return false;
};

console.log(bracketValidator("{ [ ] ( ) }"))






















