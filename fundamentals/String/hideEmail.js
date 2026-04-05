let email = "mariam@gmail.com";

function hideEmail(email){
    let atIndex = email.indexOf("@");
    let name = email.slice(0, atIndex);
    
    let hidden = name.slice(0,2) + "***";
    
    return hidden + email.slice(atIndex);
}

// "ma***@gmail.com"