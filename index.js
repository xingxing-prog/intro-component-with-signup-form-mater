var submitBtn = document.getElementById("submit");
var firstname = document.getElementById("fname");
var lastname = document.getElementById("lname");
var emailaddress = document.getElementById("emailaddress");
var password = document.getElementById("password");

 
var firsterror = document.getElementById("firsterror");
var seconderror = document.getElementById("seconderror");
var thirderror = document.getElementById("thirderror");
var fourtherror = document.getElementById("fourtherror");

var firstnameInfo = document.getElementById("firstnameInfo");
var lastnameInfo = document.getElementById("lastnameInfo");
var emailaddressInfo = document.getElementById("emailaddressInfo");
var passwordInfo = document.getElementById("passwordInfo");

submitBtn.addEventListener('click', getContentReviewed);

function getContentReviewed(e){
    
    console.log(e);
    if(firstname.value === ""){
        firstname.style.border="2px solid hsl(0, 100%, 74%)";
        firsterror.style.display="flex";
        
        firstnameInfo.textContent = "First name cannot be empty";
        firstnameInfo.style.textAlign="right";  
    }
    if(lastname.value === ""){
        lastname.style.border="2px solid hsl(0, 100%, 74%)";
        
        seconderror.style.display="flex";

        lastnameInfo.textContent="Last name cannot be empty";
    }
    
    /*if(emailaddress.value  === ""){
        emailaddress.style.border ="1px solid hsl(0, 100%, 74%)";
        thirderror.style.display="flex";

        emailaddressInfo.textContent ="Email address cannot be empty";

    }*/

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailaddress.value.match(validRegex)){
        emailaddress.style.color="#ff0000";
        emailaddress.style.border ="2px solid hsl(0, 100%, 74%)";
        thirderror.style.display="flex";
        emailaddress.style.background ="white";
        
        emailaddressInfo.style.fontFamily="sans-serif";
        emailaddressInfo.textContent ="Looks like this is not an email";
    }

    if(password.value === ""){
        password.style.border = "2px solid hsl(0, 100%, 74%)";
       
        fourtherror.style.display="flex";

        passwordInfo.textContent ="Password cannot be empty";
    }




    
 
}