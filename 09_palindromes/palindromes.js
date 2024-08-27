const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const cleanStr = str.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");
    const reverse = cleanStr.split("").reverse().join("");
    
    return cleanStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
