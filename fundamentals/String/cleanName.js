let str1 = "   hello world   ";

function cleanName(str1){
      if (!str1) return "";//empty string

      let word1 = str1.trim().split(" ");

      return word1
            .map(word => word[0].toLowerCase() + word.slice(1).toLowerCase())
            .join(" ");
}

console.log(cleanName(str1));