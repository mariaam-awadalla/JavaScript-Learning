function getLastChar(str)
{
    if(!str) return "";//empty string
    return str.slice(-1);
}

console.log(getLastChar("abc"));
