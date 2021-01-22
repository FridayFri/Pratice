var fractionToDecimal = function (numerator, denominator) {
    let a = Math.floor(numerator/denominator)
    let b = numerator % denominator
    if(b)
    console.log(a,b)
};

console.log(fractionToDecimal(2, 3));
