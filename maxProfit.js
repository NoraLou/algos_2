
//have to buy before you sell
//which numbers, in current order, have the greatestDiff between them

//runtime is still On^2
// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// function getMaxProfit(arr) {
//     var maxDiff = 0 , buyPrice, sellPrice, currDiff;

//     for( var i = 0; i < arr.length; i++) {
//         buyPrice = arr[i]
//         for( var j = i + 1; j < arr.length; j++ ) {
//             sellPrice = arr[j]
//             currDiff = Math.abs(buyPrice - sellPrice);
//             maxDiff = currDiff > maxDiff ? currDiff : maxDiff
//         }
//     }
//     return maxDiff;
// }

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var edgeCase = [1,1,1,1,1,1]
var edgeCaseTwo = [55,8,2,]

function getMaxProfit(arr){

    if (arr.length < 2) {
        throw new Error('we need at least 2 prices')
    }

    var minPrice = arr[0];
    var maxProfit = arr[1] - arr[0];

    for ( var i = 1; i < arr.length; i++) {

        var currentPrice = arr[i];

        var potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);

        minPrice = Math.min(minPrice, currentPrice);

    }
    return maxProfit;

};


console.log(getMaxProfit(edgeCaseTwo)); // returns 6 (buying for $5 and selling for $11)
