const form = document.querySelector("#form");
const messageDiv = document.querySelector('thankYouMessage');

// form.addEventListener("submit", onSubmit); 
    
// let form = document.querySelector(“#form”)

form.addEventListener("submit", onFormSubmit);



function onFormSubmit() {

   event.preventDefault();

   const data = new FormData(event.target);

   const dataObject = Object.fromEntries(data.entries());

   console.log(dataObject);

   form.reset();

   const customerOrders = [];

   customerOrders.push(dataObject);

   console.log(customerOrders);

        
   let name = dataObject.yourname;
//    let email = dataObject.email;
//    let password = dataObject.password;

 let message = `Welcome, ${name}! You are logged in!`

 console.log("first message to user", message);
 
let messageParagraph = document.createElement("p");
	messageParagraph.textContent = message;
    
	// container.appendChild(messageParagraph);

  form.appendChild(messageParagraph);

};