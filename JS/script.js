function calc(operator, num1, num2) {
    function isNotNumber(arg) {
        return (typeof arg !== 'number');
    }
    function isDivisorZero() {
        if (num2 === 0) return operator === 'div' || operator === 'rem';        
    }
    const mathActions = {
        'sum': num1 + num2,
        'diff': num1 - num2,
        'mult': num1 * num2,
        'div': num1 / num2,
        'rem': num1 % num2,
        'expo': num1 ** num2,
    }

    if (isNotNumber(num1) || isNotNumber(num2)) {
        return 'error';
    } else if (isDivisorZero()) {
        return 'на ноль делить нельзя';
    } else if (!(operator in mathActions)) {
        return 'unknown operations'
    } return mathActions[operator];    
}

console.log(calc('sum', 5, 2));
console.log(calc('diff', 5, 2));
console.log(calc('mult', 5, 2));
console.log(calc('div', 5, 2));
console.log(calc('rem', 5, 2));
console.log(calc('expo', 5, 3));
console.log(calc('exp', 5, 3));
console.log(calc('mult', 5, '2'));
console.log(calc('div', 5, 0));
console.log(calc('rem', 5, 0));
console.log(calc());
console.log(calc('divi', 5, 2));