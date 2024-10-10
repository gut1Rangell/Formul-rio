
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
        event.preventDefault();

        checkForm();

})

email.addEventListener("blur", () => {
    checkInputUserEmail();
})

username.addEventListener("blur", () =>{
    checkInputUsername();
})

function checkInputUserName(){
    const usernameValue = username.value;

    if(usernameValue === ""){
      errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"

    }
}

function checkInputUserEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O e-mail é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputUserPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa conter no minimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"

    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value; 

    if(passwordConfirmation == ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    }else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }


}

function checkForm(){

    checkInputUserName();
    checkInputUserEmail();
    checkInputUserPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll("./form-content")

    const isValid = [...formItems].every((item) =>{
        return item.className === "form-content"
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO! :)")
    }


}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

