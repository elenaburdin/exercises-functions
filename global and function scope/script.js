let x = 100;
console.log(x, 'in global');

function getNumber() {
    console.log(x, 'in function');
}
getNumber();

if (true) {
    console.log(x, 'in block');
}

function getNumbers() {
    let y = 200;
    console.log(y, 'function scope');
    console.log(x, 'in function scope');
}
getNumbers();

function changedGlobalNumber() {
    let x = 55;
    let y = 50;
    console.log(y, 'in function scope');
    console.log(x, 'in function scope, changed global');
}

changedGlobalNumber();