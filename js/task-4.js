const getForm = document.querySelector(".login-form");
getForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(e){
e.preventDefault();
const email = getForm.elements.email.value.trim();
const password = getForm.elements.password.value.trim();
if(email === "" || password === "" ){
alert( `All form fields must be filled in`);
}else {
    e.target.reset();
}
console.log("email :", email);
console.log("password :", password);

};

