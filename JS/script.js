/* Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
Пример вызова такой функции 
Calc(‘sum’, 1, 2) - возвращает 3
Calc(‘multi’, 1, 2) - возвращает 2
И так далее, со всеми математическими действиями, которые вы изучили в задаче #7
Но и это еще не все. 
Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами.
В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation” 

Операции:
    сложить - sum
    вычесть - diff(erence)
    умножить - mult(iplication)
    разделить - div(ision)
    возвести в степент - expo(nent)
    остаток от деления - rem(ainder)
*/

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

/* function calc(operation, num1, num2) {
    
    if ( ( operation && num1 && num2 === undefined ) || ( typeof(num1) != 'number' || typeof(num2) != 'number' ) ) {
        return console.log('error');
    }

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
            return console.log('unknown operations');
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
 */