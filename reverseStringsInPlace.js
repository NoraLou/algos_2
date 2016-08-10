var myString = "apple";

function revInPlace(str) {
  var strArr = str.split('');

  for (var i = 0; i < Math.floor(strArr.length/2); i++) {
     var tmpHead = strArr[i];
     strArr[i] = strArr[strArr.length-1-i];
     strArr[strArr.length-1-i] = tmpHead;
  }

  return strArr.join('');

}


console.log(revInPlace(myString))
