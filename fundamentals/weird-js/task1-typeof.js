// Task 1: typeof weird cases

// Expected Output:
// object
// object
// number

console.log(typeof null);
console.log(typeof []);
console.log(typeof NaN);

/*
Explanation:
- null → "object" (bug in JS)
- [] → array is object
- NaN → type is number

Rule:
typeof is not always reliable in JS
*/