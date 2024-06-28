// Task 1

let fruits = ['apple', 'banana', 'orange'];

fruits.push('strawberry');

console.log(fruits);

fruits.pop();

console.log(fruits);

// Task 2

let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a-b);

console.log(numbers);


// Task 3

let doubled = numbers.map(num => num * 2);

console.log(doubled)

let even = numbers.filter(num => num%2 == 0);

console.log(even)

let reduction = numbers.reduce((acc, curr) => acc+curr, 0)

console.log(reduction)