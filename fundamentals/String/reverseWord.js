function reverseWord(str){
    if (!str) return "";//empty string
    return str.split("").reverse().join("");
}

console.log(reverseWord("abc"));