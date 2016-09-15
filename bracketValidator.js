// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false


// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
// Let's say:
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
// Examples:
// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false


// brackets must be pairs and nested
// need to match opener to closer
// need to know last open bracket
// cannont have only one bracket

function bracketValidator(str) {
    var bracketPairs = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };

    var openBrackets = [];
    //hash map lookup by value- unique only -or use lodash method with associative array for lookup
    var openers = new Set(["{", "(", "["]);
    var closers = new Set(["}", ")", "]"]);

    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);

        // if it is an opener
        if (openers.has(currChar)) {
            openBrackets.push(currChar)
        }

        if (closers.has(currChar)) {
            //1. it is alone, no pair, invalid /false
            if ( openBrackets.length === 0 ) {
                throw new Error ("un-matched single bracket!");
                return false;
            }

            var lastOpen = openBrackets[openBrackets.length-1]
            if ( bracketPairs[lastOpen] === currChar) {
                openBrackets.pop();

            }
        }
    }

    return openBrackets.length === 0;
};


console.log(bracketValidator("{ [ }"))




























