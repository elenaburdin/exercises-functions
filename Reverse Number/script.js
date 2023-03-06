function reversedNum(num) {
    return (
        parseFloat(
            num.toString().split('').reverse().join('')
        )
    )
}

console.log(reversedNum(123))
console.log(reversedNum(5872))
console.log(reversedNum(8547))
console.log(reversedNum(54.85))
