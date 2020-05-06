// function composition
const compose = function(arrOfFuncs) {
    return val => arrOfFuncs.reduce((res, fn) => fn(res), val);
}

function add1(num) {
    return num + 1;
}

function doubleIt(num) {
    return num * 2;
}

const combined = compose([add1, doubleIt]);

combined(3);
