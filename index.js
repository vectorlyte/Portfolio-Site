const form = document.getElementById("form");
const formName = form.elements["name"];
const formEmail = form.elements["email"];
const formMessage = form.elements["message"];




function showError(prop){
    const element = document.getElementById(prop);
    element.className = "fail";
}

function checkValue(prop,value){

    if(value === ""){
        console.log(prop + " is empty");
    } else if(prop === "email"){
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        emailRegex.test(value.trim()) ? console.log("valid") : showError(prop);
    }
}


form.addEventListener('submit', (event) => {

    event.preventDefault();

    let name = formName.value;
    let email = formEmail.value;
    let message = formMessage.value;
    checkValue("name", name);
    checkValue("email", email);
    checkValue("message", message);


});

//check that the name, email, and message inputs are valid

// if one is not valid, update html and css, and prevent submit

// for each invalid element, display message accordingly.



