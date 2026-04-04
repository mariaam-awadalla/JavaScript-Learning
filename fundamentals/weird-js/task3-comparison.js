// Task 3: Weird comparisons

console.log([] == false); 
console.log("0" == false);
console.log("" == false);

/*
Explanation:

[] == false:
[] → "" → 0
false → 0
→ true

"0" == false:
"0" → 0
false → 0
→ true

"" == false:
"" → 0
false → 0
→ true

Rule:
== does type coercion (dangerous)
*/