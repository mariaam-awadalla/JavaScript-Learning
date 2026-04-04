// Task 2: Type Coercion

console.log(5 + "5");     // "55"
console.log("5" - 2);     // 3
console.log(true + 1);    // 2

/*
Explanation:
- + with string → concatenation
- -, *, / → convert to number
- true = 1

Rule:
+ → string
others → number
*/