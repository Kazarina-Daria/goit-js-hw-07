const form = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

form.addEventListener("input", getValue);
function getValue(e){
let userInput = e.target.value.trim();

if (userInput === ""){
    return nameOutput.textContent = "Anonymous"; 
} else{
return nameOutput.textContent= userInput;
}};

