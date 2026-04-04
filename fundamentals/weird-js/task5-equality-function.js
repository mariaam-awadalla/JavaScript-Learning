// Task 5: Equality checker

function checkEquality(a, b) {
  if (a === b) {
    return "strict equal";
  } else if (a == b) {
    return "loose equal";
  } else {
    return "not equal";
  }
}

console.log(checkEquality(5, "5")); // loose equal
console.log(checkEquality(5, 5));   // strict equal
console.log(checkEquality(5, 10));  // not equal

/*
Rule:
=== safer than ==
*/