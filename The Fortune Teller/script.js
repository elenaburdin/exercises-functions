function tellFortune(numChildren, parentsName, location, jobTitle) {
    return `"You will be a ${jobTitle} in ${location}, and married to ${parentsName} with ${numChildren} kids."`
}

console.log(tellFortune(2, 'Emma', 'Berlin', 'QA'));
console.log(tellFortune(1, 'Bob', 'London', 'Manager'));
console.log(tellFortune(3, 'Brad', 'Paris', 'Full STack Developer'));
console.log(tellFortune(1, 'Wesley', 'Rome', 'QA'));