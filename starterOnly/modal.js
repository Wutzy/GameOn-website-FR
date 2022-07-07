function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const spanClose = document.querySelector("span.close");
let inputFirstName = document.getElementById('first');
const inputLastName = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputBirthdate = new Date (document.getElementById('birthdate').value);
const inputQuantity = document.getElementById('quantity');
const checkboxConditions = document.getElementById('checkbox1');
const confirmPopup = document.getElementById('confirmation');
const spanCloseConfirm = document.querySelector("span.closeConfirm");

// Variables usefull
let chosenLocation = "";
const len = document.getElementsByName('location').length;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validDateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
let currentYear = new Date().getFullYear();
const counterDetec = document.getElementsByClassName('error_detection').length;
let counterError = counterDetec-1;


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
=======


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
spanClose.addEventListener("click", closeModal);
spanCloseConfirm.addEventListener("click", closeModal);



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() 
{
  modalbg.style.display = "none";
  confirmPopup.style.display = "none";
  document.getElementById('myForm').reset();
  const resetError = document.querySelectorAll('.error_detection');
  for (i = 0; i < counterDetec; i++)
  {
    resetError[i].innerHTML = '';
  }
}
// Close modal event
spanClose.addEventListener("click", closeModal);
spanCloseConfirm.addEventListener("click", closeModal);

//Prevent submit action
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
})

// validate modal form
function validate() 
{  
       
                                // First name validation

  // First name validation


    if (inputFirstName.value === '' || inputFirstName.value.length < 2)
    {
      document.querySelector('.msg-error_firstName').innerHTML = '<p>Merci de rentrer un prénom avec au moins deux caracteres</p>';      
      
    } else {
      document.querySelector('.msg-error_firstName').innerHTML = '';  
    }



                                 // Last name validation
    if (inputLastName.value === '' || inputLastName.length < 2)
    {
      document.querySelector('.msg-error_lastName').innerHTML = '<p>Merci de rentrer un nom avec au moins deux caracteres</p>'; 
      
    } else {
      document.querySelector('.msg-error_lastName').innerHTML = '';  
    }

                                // Email Validation
    if (!inputEmail.value.match(validRegex))
    {
      document.querySelector('.msg-error_email').innerHTML = '<p>Merci de rentrer un email valide</p>'; 
      
    } else {
      document.querySelector('.msg-error_email').innerHTML = '';  
    }

                                // Birthdate validation   
    if (currentYear-120 > new Date (document.getElementById('birthdate').value).getFullYear() || document.getElementById('birthdate').value === '')
    {
      document.querySelector('.msg-error_birthdate').innerHTML = '<p>Merci de rentrer une date correcte.</p>';   
      
    } else {
      document.querySelector('.msg-error_birthdate').innerHTML = '';  
    }
    
    if (currentYear-13 < new Date (document.getElementById('birthdate').value).getFullYear())
    {
      document.querySelector('.msg-error_birthdate2').innerHTML = '<p>Tu es trop jeune !</p>'; 
      
    } else {
      document.querySelector('.msg-error_birthdate2').innerHTML = '';  
    }
    
  // Quantity validation
    if (inputQuantity.value === "" || inputQuantity.value < 0 || inputQuantity.value > 10)
    {
      document.querySelector('.msg-error_quantity').innerHTML = '<p>Merci de rentrer une quantité correcte</p>'; 
      
    } else {
      document.querySelector('.msg-error_quantity').innerHTML = '';  
    }



                                // Localisation validation
    for (i = 0; i < len; i++) {
        if (document.getElementsByName('location')[i].checked) {
            chosenLocation = document.getElementsByName('location')[i].value
        }
    }
    if (chosenLocation === "") {
      document.querySelector('.msg-error_location').innerHTML = '<p>Merci de rentrer une localisation</p>';      
       
    } else {
      document.querySelector('.msg-error_location').innerHTML = '';  
    }

                                //Conditions validation
    if (checkboxConditions.checked === false)
    {
      document.querySelector('.msg-error_userConditions').innerHTML = '<p>Merci de cocher cette case.</p>'; 
    } 
    else 
    {
      document.querySelector('.msg-error_userConditions').innerHTML = '';  
    }

                                  //Validation global
  counterError = counterDetec;
  for (i = 0; i < counterDetec; i++)
  {
    if (document.getElementsByClassName('error_detection')[i].innerHTML === '') 
    {
      counterError = --counterError;
    }
  } 

  if (counterError > 0) {
    return false;
  } else {
    confirmPopup.style.display = "flex";
    return true;
  }
}

 


