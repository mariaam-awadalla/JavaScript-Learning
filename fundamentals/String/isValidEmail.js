function isValidEmail(email){
    return email.includes("@") && email.includes(".") && !email.startsWith("@");
}