let str1 = "abc";

function capitalize(str1){
      if (!str1) return "";//empty string
      return str1.toUpperCase();
}

console.log(capitalize(str1));