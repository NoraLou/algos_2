//Question: How would you make this work?

add(2, 5); // 7
add(2)(5); // 7


function add(x) {
    return function (y) {
        return x + y
    }
}

console.log(add(2)(5))


