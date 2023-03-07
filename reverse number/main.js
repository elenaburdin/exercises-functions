function reverse(num) {
    num = num + '';
    return num.split('').reverse().join('');
}

console.log(reverse(123));