//Given a list of chars and a number n wrtie a function that returns every permutation of //those chars of length n.  Repetition is allowed.


function permToN(charList, returnLen, base) {
    if (base.length === returnLen) {
        console.log(base)
    } else {
        for (var i = 0; i < charList.length; i++) {
            var addToBase = charList[i];
            permToN (charList, returnLen, base + addToBase)

        }
    }
}

permToN(['a', 'b', 'c'], 2, "");







