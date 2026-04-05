let str1 = "Mariam@gmail.com";

function extractUsername(email){
    if (!email.includes('@'))
        return "";

    return email.split('@')[0];
}

//s7 brdo
function extractUsername(email){
   let index = email.indexOf('@');
   return email.slice(0, index);
}

console.log(extractUsername(str1));