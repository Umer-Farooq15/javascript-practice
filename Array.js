
let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log("After push():", arr);

let popped = arr.pop();
console.log("After pop():", arr); 

let shifted = arr.shift();
console.log("After shift():", arr);

arr.unshift(1);
console.log("After unshift():", arr);

let arr2 = [6, 7, 8];
let combined = arr.concat(arr2);
console.log("After concat():", combined);

let sliced = arr.slice(1, 3);
console.log("After slice():", sliced); 

arr.splice(2, 1, 'a', 'b');
console.log("After splice():", arr); 

let index = arr.indexOf('a');
console.log("Index of 'a':", index); 

arr.forEach(item => console.log("forEach:", item)); 

let doubled = arr.map(item => item * 2);
console.log("After map():", doubled);

let filtered = arr.filter(item => typeof item === 'number');
console.log("After filter():", filtered);

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce():", sum);

let allEven = arr.every(item => item % 2 === 0);
console.log("Are all elements even?", allEven); 

let hasEven = arr.some(item => item % 2 === 0);
console.log("Does the array have at least one even number?", hasEven); 

let found = arr.find(item => item > 2);
console.log("First element greater than 2:", found); 

let foundIndex = arr.findIndex(item => item > 2);
console.log("Index of first element greater than 2:", foundIndex); 

let includesThree = arr.includes(3);
console.log("Does the array include 3?", includesThree);

arr.sort();
console.log("After sort():", arr);

arr.reverse();
console.log("After reverse():", arr);

let joinedString = arr.join('-');
console.log("Joined string:", joinedString);
