function calc(operation, num1, num2) {

    // Вариант проверки без доп. функций
    // const isArgsUndefined = operation === undefined && num1 === undefined && num2 === undefined;
    // const isOperandNaN = typeof num1 !== 'number' || typeof num2 !== 'number';
    // const isNotValid = isArgsUndefined || isOperandNaN;
    // const isDivisorZero = num2 === 0 && operation === 'div' || num2 === 0 && operation === 'rem';

    function isNotNumber(arg) {
        return (typeof arg !== 'number');
    }

    function isUndefined(arg) {
        return (arg === undefined);
    }
    const isNotValid = isUndefined(operation) && isUndefined(num1) && isUndefined(num2) || (isNotNumber(num1) || isNotNumber(num2));
    const isDivisorZero = num2 === 0 && (operation === 'div' || operation === 'rem');

    if (isNotValid) {
        return 'error';
    } else if (isDivisorZero) {
        return 'на ноль делить нельзя';
    }
    switch (operation) {
        case 'sum':
            return num1 + num2;
        case 'diff':
            return num1 - num2;
        case 'mult':
            return num1 * num2;
        case 'div':
            return num1 / num2;
        case 'rem':
            return num1 % num2;
        case 'expo':
            return num1 ** num2;
        default:
            return 'unknown operations';
    }
}

console.log(calc('sum', 5, 2));
console.log(calc('diff', 4, 2));
console.log(calc('mult', 5, 2));
console.log(calc('div', 5, 0));
console.log(calc('rem', 5, 0));
console.log(calc('expso', 5, 13));