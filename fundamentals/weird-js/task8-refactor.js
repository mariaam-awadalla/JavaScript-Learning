// Task 8: Fix equality issue

let x = "5";
let y = 5;

// Bad
if (x == y) {
  console.log("equal (bad practice)");
}

// Good
if (Number(x) === y) {
  console.log("equal (correct)");
}

/*
Rule:
Always use ===
*/