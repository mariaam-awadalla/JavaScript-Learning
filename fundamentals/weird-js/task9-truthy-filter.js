// Task 9: Filter truthy values

function filterTruthy(arr) {
  return arr.filter(Boolean);
}

console.log(filterTruthy([0, "hello", "", null, 5, false]));

/*
Output:
["hello", 5]

Rule:
Falsy values:
false, 0, "", null, undefined, NaN
*/
