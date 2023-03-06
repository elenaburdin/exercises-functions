function circleValues(radius) {
    return `The perimeter of a circle is ${Math.PI * 2 * radius} 
    and area is ${Math.PI * radius * radius}`
}

console.log(circleValues(10)); //"Perimeter: 62.83, Area: 314.15"
console.log(circleValues(15)) //"Perimeter: 94.24, Area: 706.85"
console.log(circleValues(25)) //"Perimeter: 157.07, Area: 1963.49"