// 1
function greet() {
    console.log('Hello');
}
greet();

// 2
function login(user, id) {
    return `The user: ${user} is logged in with the id of ${id}`
}
console.log(login('John', 854));

// 3
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 5));

// 4
function substract(num1, num2) {
    return num1 - num2;
}
const result = substract(10, 5);
console.log(result, substract(5, 1));

// 5
function todos(user) {
    return `for ${user.name} the task for today is ${user.taskTitle}`;
}
const user = {
    name: 'Emma',
    taskTitle: 'To finish homework'
}
console.log(todos(user));

// 6
function isPresent(fullName) {
    return fullName + ' is present'
}
console.log(isPresent('Sam Taylor'));

// 7
function isHappy(name = 'Jake') {
    return name + ' is happy';
}
console.log(isHappy());

// 8
function restParams(...numbers) {
    return numbers;
}
console.log(restParams(1, 2, 3, 4, 5));

// 9
function loops(...numbers) {
    let result = 0;
    for (nums of numbers) {
        result += nums;
    }
    return result;
}
console.log(loops(5, 5, 25));

// 10
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6]);






