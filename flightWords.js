

//choose two movies whose combined runtimes equal the total flight length
//exactly 2 movies
//don't repeat movie
// opt runtime over memory
//return boolean

var movieLengths = [120, 60, 40, 160, 90, 80, 50, 100, 112]

function getMovies(flightLength, movieLengths) {
    var iLen = movieLengths.length,
        hadChoice = {},
        diff;
    for (var i = 0; i < iLen; i ++ ) {
        diff = flightLength - movieLengths[i];
        if (hadChoice[diff]) {
            return true;
        } else if ( !hadChoice[movieLengths[i]]) {
            hadChoice[movieLengths[i]] = true;
        }
    }
    return false;
}



console.log(getMovies(180, movieLengths))
