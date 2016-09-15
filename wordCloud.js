
var myInput =  'After beating the eggs, Dana read fun-fact the next step: Add milk and eggs, then add flour and sugar.'


function makeWordCloud(str) {

    var haveSeen = {};

    var wordArr = str.toLowerCase().split(' ');
    console.log(wordArr);

    for (var i = 0; i < wordArr.length; i++) {
        var currWord = wordArr[i];
        if(!haveSeen[currWord]){
            haveSeen[currWord] = 1
        }else{
            haveSeen[currWord]++
        }
    }
    return haveSeen;
}


console.log(makeWordCloud(myInput));
