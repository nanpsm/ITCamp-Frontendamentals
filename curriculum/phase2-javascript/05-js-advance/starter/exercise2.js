// 1. Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 2. Use .map() to double them
const doubled = numbers.map(num => num*2);

// 3. Use .filter() to keep numbers greater than 5
const filtered = numbers.filter(num => num>5);

// 4. Merge the filtered and mapped arrays
const merged = [...filtered, ...doubled];

// 5. Find the first element that is a multiple of 3
const firstMultipleOfThree = merged.find(num => num % 3 == 0);

console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Merged:", merged);
console.log("First multiple of 3:", firstMultipleOfThree);
