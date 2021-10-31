/* 
Операции:
    сложить - sum
    вычесть - diff(erence)
    умножить - mult(iplication)
    разделить - div(ision)
    возвести в степент - expo(nent)
    остаток от деления - rem(ainder)
*/

function start() {
    while (true) {

        let num1;
        let num2;
        let operation;

        num1 = prompt('введите первое число', '');
        if (num1 === null) break;
        num2 = prompt('введите второе число', '');
        if (num2 === null) break;
        operation = prompt('введите операцию', '');
        if (operation === null) break;

        let result = calc(operation, +num1, +num2);

        alert(result);
    }    
}


function calc(operation, num1, num2) {

    if (checkParams(operation, num1, num2)) {
        return 'error';
    } else {
        switch (operation) {
            case 'sum':
                return sum(num1, num2);
            case 'diff':
                return diff(num1, num2);
            case 'mult':
                return mult(num1, num2);
            case 'div':
                return div(num1, num2);
            case 'rem':
                return rem(num1, num2);
            case 'expo':
                return expo(num1, num2);
            default:
                return 'unknown operations';
        }
    }


}

function checkParams(operation, num1, num2) {
    if ((operation && num1 && num2 === undefined) || (typeof(num1) != 'number' || typeof(num2) != 'number')) {
        return true;
    }    
}

function sum(num1, num2) {
    return num1 + num2;
}

function diff(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 == 0) {
        return 'на ноль делить нельзя'
    }
    return num1 / num2;
}

function rem(num1, num2) {
    if (num2 == 0) {
        return 'на ноль делить нельзя'
    }
    return num1 % num2;
}

function expo(num1, num2) {
    return num1 ** num2;
}

start();