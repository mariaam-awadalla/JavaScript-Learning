// Task 7: Fix the bug

let result = "10" + 5 * 2;

console.log(result); // "1010"

/*
Explanation:
5 * 2 = 10
"10" + 10 = "1010"

Fix:
*/

let fixed = Number("10") + 5 * 2;
console.log(fixed); // 20