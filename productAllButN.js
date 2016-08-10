
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

//greedy approach .
//product of all integers except the integer at each index can be broken down to

//1.the product of all integers before each index.
//2.the product of all integers after each index.

var myIntArr = [1,7,3,4]; //returns [84, 12, 28, 21]

function getAllProdsBuN(inArr) {
    var productAllButIndex = [];
    var productSoFar = 1;


    for ( var i = 0; i < intArr.length; i++ ) {
        productAllButIndex.push(productSoFar);
        productSoFar *= inArr[i]
    };
}

getAllProdsButN(myIntArr);

