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
  let regex = /^([a-zA-Z '\-éèêëçäàïÿ]+)$/;
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
  let regex = /^([a-zA-Z '\-éèêëçäàïÿ]+)$/;
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



  // fonction pour valider le formulaire

document.querySelector("form").addEventListener("submit", (e) => {
  // "annuler" le comportement par défaut
  e.preventDefault();

viderErreur();
  

  // vérifier un par un tous les champs
  const verifFirstName = FirstName();
  const verifLastName = LastName();
  const verifEmail = Email();
  const verifQuantity = Quantity();
  const verifCity = City();
  const verifCheckbox = Checkbox();


  console.log(verifFirstName, verifLastName, verifEmail, verifQuantity, verifCity, verifCheckbox)

  // si j'ai tout à vrai : TOUT VA BIEN
  if(verifFirstName && verifLastName && verifEmail && verifQuantity && verifCity && verifCheckbox)
  {
    // j'affiche le message de succès
    console.log("OK C BON")
    document.querySelector("form").style.display="none";
    let message=document.createElement("p");
    message.innerHTML="Merci pour votre inscription";
    message.style.textAlign="center";
    document.querySelector(".modal-body").appendChild(message);
  }
  // sinon, j'ai au moins un faux
  else
  {
    console.log("ERREUR")
    if(!verifFirstName)
    {
      console.log("prénom faux")
      document.querySelector("#first").parentElement.setAttribute("data-error", "Saisissez un prénom valide")
      document.querySelector("#first").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifLastName)
    {
      console.log("nom faux")
      document.querySelector("#last").parentElement.setAttribute("data-error", "Saisissez un nom valide")
      document.querySelector("#last").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifEmail)
    {
      console.log("email faux")
      document.querySelector("#email").parentElement.setAttribute("data-error", "Saisissez un email valide")
      document.querySelector("#email").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifQuantity)
    {
      console.log("tournois faux")
      document.querySelector("#quantity").parentElement.setAttribute("data-error", "Saisissez un nombre valide")
      document.querySelector("#quantity").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifCity)
    {
      console.log("city faux")
      document.querySelector(".checkbox-input").parentElement.setAttribute("data-error", "Saisissez une ville")
      document.querySelector(".checkbox-input").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifCheckbox)
    {
      console.log("agreement faux")
      document.querySelector("#checkbox1").parentElement.setAttribute("data-error", "Ce champ est obligatoire")
      document.querySelector("#checkbox1").parentElement.setAttribute("data-error-visible", true)
    }
  }

})

  // vider les erreurs

  function viderErreur() {
    document.querySelector("#first").parentElement.setAttribute("data-error", "")
    document.querySelector("#first").parentElement.setAttribute("data-error-visible", false)

    document.querySelector("#last").parentElement.setAttribute("data-error", "")
    document.querySelector("#last").parentElement.setAttribute("data-error-visible", false)

    document.querySelector("#email").parentElement.setAttribute("data-error", "")
    document.querySelector("#email").parentElement.setAttribute("data-error-visible", false)

    document.querySelector("#quantity").parentElement.setAttribute("data-error", "")
    document.querySelector("#quantity").parentElement.setAttribute("data-error-visible", false)

    document.querySelector(".checkbox-input").parentElement.setAttribute("data-error", "")
    document.querySelector(".checkbox-input").parentElement.setAttribute("data-error-visible", false)

    document.querySelector("#checkbox1").parentElement.setAttribute("data-error", "")
    document.querySelector("#checkbox1").parentElement.setAttribute("data-error-visible", false)
  }