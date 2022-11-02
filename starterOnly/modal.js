function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalX = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
closeModalX.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close the modal form
function closeModal (){
  modalbg.style.display = "none";
}

//check "prénom" data
function FirstName () {
  let regex = /^([a-zA-Z\-]+)$/;
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length > 2) {
    return regex.test(inputValue);
  }   
	else {
    alert("Saisissez un prénom valide");
    return false;
  }
}

//check "nom de famille" data
function LastName () {
  let regex = /^([a-zA-Z\-]+)$/;
	let inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length > 2) {
    return regex.test(inputValue);
  }   
	else {
    alert("Saisissez un nom valide");
    return false;
  }
}

//check "email" data
function Email () {
    let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,4})$/;
    let inputValue = document.getElementById("email").value;
    if (inputValue !== null){
      return regex.test(inputValue);
    }
    else {
      return false;
    }
}

//check "tournois quantité" data
function Quantity() {
    let regex = /^[0-9]+$/;
    let inputValue = document.getElementById("quantity").value;
    if (inputValue !== null){
      return regex.test(inputValue);
    }
    else {
      return false;
    }
}

//check "ville" radio
function City() {
    let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
    for(let radio of radioButtons){
        if(radio.checked === true) 
          return true;
    }
    return false;
}

//check "première checkbox"
function Checkbox() {
    let inputValue = document.getElementById("checkbox1").checked;
    return inputValue;
}


//corriger la fonction par défaut
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();  
})


function validate () {
    if (FirstName === true) {
      return true;
    } 
    else {
      FirstName.formData = "invalid";
    }
  }