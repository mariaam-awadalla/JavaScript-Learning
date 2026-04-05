let str1="i love js";

function countWord(str1){
      if (!str1)
            return 0;

      return str1
            .trim().split(" ").filter(word => word !== "").length;
}