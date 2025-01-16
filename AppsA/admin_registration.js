// Patient Login Form Validation
function validate(){

    // Admin Verification Key Checks
    let avkey = document.querySelector("input[name=averification_key]").value;
    avkey = avkey.toString();

    if(avkey.match(/[^a-zA-Z0-9]/) != null || avkey.length != 7){
        alert("Admin Verification Keys do not have special characters or be less than 7 characters! Enter the key provided by your supervisor!");
        return false;
    }

    // First Name Checks
    let afname = document.querySelector("input[name=first_name]").value;
    afname = afname.toString();

    if(afname.match(/^([a-zA-Z ]{2,30})/) == null || afname.match(/[^a-zA-Z ]/) != null){
        alert("First Name should be within 2-30 characters and cannot have numbers or special characters in it!");
        return false;
    }

    // Last Name Checks
    let alname = document.querySelector("input[name=last_name]").value;
    alname = alname.toString();

    if(alname.match(/^([a-zA-Z]{2,15})/) == null || alname.match(/[^a-zA-Z]/) != null){
        alert("Last Name should be within 2-15 characters and cannot have numbers or special characters in it!");
        return false;
    }

    // Date of Birth Checks
    let adob = document.querySelector("input[name=date_of_birth]").value;
    adob = adob.toString();

    if(adob == ""){
        alert("Please enter your date of birth!");
        return false;
    }

    // Contact Number Checks
    let acontact = document.querySelector("input[name=contact]").value;
    acontact = acontact.toString();

    if(!acontact.startsWith("01") || acontact.match(/[0-9]{11}/ == null || acontact.match(/[^0-9]/) != null)){
        alert("Contact number should be of 11 charaters starting with '01' and should have digits only!" );
        return false;
    }

    // Patient Email Checks
    let aemail = document.querySelector("input[name=email]").value;
    aemail = aemail.toString();
    
    if(aemail.match(/^([a-zA-Z0-9\._]+)@([a-z]+).([a-z]{2,10})$/) == null){
        alert("Email not recognized!");
        return false;
    }
    
    // Patient Password Check
    let apass = document.querySelector("input[name=password]").value;
    apass = apass.toString();

    if(apass.length<7 || apass.length>15){
        alert("Password length should be of 7-15 characters!");
        return false;
    }

    if(apass.match(/[^a-zA-Z0-9]/g) != null){
        alert("Password cannot have any special characters!");
        return false;
    }

    // Confirm Password Check

    let acpass = document.querySelector("input[name=confirm_password]").value;
    acpass = acpass.toString();

    if(apass != acpass){
        alert("Password did not match! Please check the passwords again!");
        return false;
    }


    
    
}
