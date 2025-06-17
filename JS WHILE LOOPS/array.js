// data types.
// 2 types in js(primitive and non primitive)
// primitive/common data types(string, number, boolean, null, undefined, bigint)
// Non-primitive or object data types(arrays, functions, js-objects)
//Arrays; a collection of same or mixed data types in one variable

let fruits = ["apple", "banana", "guava", "mango"]
let numbers = [1, 2, 3, 4, 5]
let colors = ["red", "blue", "yellow"]
let mixedArray = [true, false, 42, "yellow", "mango", 5]
console.log(mixedArray[0]);

//updating fruits array
fruits[0] = "pear"
console.log(fruits)

// javascript Array Methods
colors.push("orange")
console.log(colors)
colors.pop()
console.log(colors)