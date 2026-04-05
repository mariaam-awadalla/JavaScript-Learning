function isPalindrome(str) {
      if (!str) return "";//empty string
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
}   

console.log(isPalindrome("abc"));