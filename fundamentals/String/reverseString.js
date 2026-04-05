let str1 = "abc";

function reverseString(str) {
      if (!str) return "";//empty string
      return str.split("").reverse().join("");
}   

console.log(reverseString(str1));