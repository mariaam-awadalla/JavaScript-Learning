let str2 = "def";

function capitalizeFirst(str2){
      if (!str2) return "";//empty string
      return str2[0].toUpperCase() + str2.slice(1);
}

console.log(capitalizeFirst(str2));