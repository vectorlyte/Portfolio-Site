// get form element from html doc

const form = document.getElementById("form");
// split the elements we need down to a few varibles

const formName = form.elements["name"];
const formEmail = form.elements["email"];
const formMessage = form.elements["message"];
// get the labels for displaying error messages

const nameLabel = document.getElementById("name-small");
const emailLabel = document.getElementById("email-small");
const messageLabel = document.getElementById("message-small");

// function takes a form element + a status and displays error label + red glow around offending input box

function showError(prop, condition){
    const element = document.getElementById(prop);
    element.className = "fail";

    if(condition === "noValue"){
    switch(prop){
        case "name":
            nameLabel.innerText = "please enter a " + prop;
            break;
        case "email":
            emailLabel.innerText = "please enter an " + prop;
            break;
        case "message":
            messageLabel.innerText = "please write a message";
            break;
    }
}
    if(condition === "invalid"){
        emailLabel.innerText = "please enter a valid " + prop;
    }
}

//  removes error modifications if invalid input is corrected, always called but isnt noticeable every time.

function correctError(prop){
    label = document.getElementById(prop + "-small");
    correct = form.elements[prop];
    correct.className = "input";
    label.innerText = ""
}

// Checks to see if inputs have a value in them, and if email address format is valid

function checkValue(prop,value){

    if(value === ""){
        showError(prop, "noValue");
        return false;
    } else if(prop === "email"){
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!emailRegex.test(value.trim())){
            showError(prop, "invalid")
            return false;
        } else {
        correctError(prop);
        return true;
        }
    } else {
        correctError(prop);
        return true;
    }
}

// triggers when submit button is pressed, passes all inputs through the checkValue function. if all comes back true, the final if statement will trigger and submit the data.

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let name = checkValue("name", formName.value);
    let email = checkValue("email", formEmail.value);
    let message = checkValue("message", formMessage.value);
    
    if(name && email && message){
        console.log("submitting");
    }
});