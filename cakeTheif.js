
var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

//calculating only per weight
function maxDuffelBagValue (cakeTypes, capacity) {

    var maxHaul = 0;
    var availWeight = capacity;

    var cakesInDescendingValue = cakeTypes.sort(function(cakeObjOne, cakeObjTwo) {
        return cakeObjOne.value < cakeObjTwo.value
    });

    for (var i = 0; i < cakesInDescendingValue.length; i++ ) {
        var cakeVal = cakesInDescendingValue[i].value;
        var cakeWeight = cakesInDescendingValue[i].weight;
        var numCakesFit = Math.floor(availWeight/cakeWeight);
        var maxValueByType = (numCakesFit * cakeVal)
        maxHaul += maxValueByType;
        availWeight = availWeight - (numCakesFit * cakeWeight)
    }

    return maxHaul
};

console.log(maxDuffelBagValue(cakeTypes, capacity))












































