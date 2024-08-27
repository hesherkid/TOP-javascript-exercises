const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((arr, curr) => arr + curr, 0);
  }

const multiply = function(array) {
return array.reduce((arr, curr) => arr * curr);
};
// you don't set an initial value when using reduce to multiply

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (let i = num -1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
