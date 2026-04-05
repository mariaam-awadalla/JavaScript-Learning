function countWords(str) {
      if (!str) return 0;//empty string

      const words = str.trim().split(/\s+/);
      return words.length;
}   

console.log(countWords("i love js"));