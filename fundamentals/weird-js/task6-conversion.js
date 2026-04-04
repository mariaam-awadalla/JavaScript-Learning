// Task 6: Convert to number safely

function convertToNumber(value) {
  let num = Number(value);

  if (Number.isNaN(num)) {
    return "invalid number";
  }

  return num;
}

console.log(convertToNumber("10"));   // 10
console.log(convertToNumber("abc"));  // invalid number

/*
Rule:
Use Number.isNaN for accurate check
*/