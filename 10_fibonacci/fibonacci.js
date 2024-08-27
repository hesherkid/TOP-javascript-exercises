const fibonacci = function(num) {
    let number = Number(num)
    if (number < 0) {
        return "OOPS"
    } else {
    return number < 1 ? 0
        : number <= 2 ? 1
        : fibonacci(number -1) + fibonacci(number - 2);   
    }
};

// Do not edit below this line
module.exports = fibonacci;
