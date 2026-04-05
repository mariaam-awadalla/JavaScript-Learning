function checkWord(str, word){
    return str.includes(word);
}

checkWord("i love js", "love");   // true
checkWord("i love js", "python"); // false