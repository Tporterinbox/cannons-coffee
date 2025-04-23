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


    // // Get form values
    // const name = document.querySelector('name');
    // const email = document.querySelector("email");
    // const phone = document.querySelector('phone');
    // const comments = document.querySelector('comments');
    // const flavor = document.querySelector('flavor');
    // const interest = document.querySelector('input[name="interest"]:checked');

   let name = dataObject.yourname;
   let email = dataObject.email;
   let phone =dataObject.phone;
   let comment = dataObject.comment;
   let coffeeSelect = dataObject.coffeeSelect;
   let interest= dataObject.coffee;
  

    // Log to console
    // console.log("Form submitted:", formData);

    // Display thank-you message
    // messageDiv.innerHTML = `Thanks, ${name}! We've received your message about "${interest}". We'll contact you at ${email} or ${phone}. We're glad you like ${flavor} coffee!`;
    let message =`Thanks, ${name}! We've received your message about ${coffeeSelect}. We'll contact you at ${email} or ${phone}. We're glad you like ${coffeeSelect} coffee!`;
    console.log("first message to user", message);
    // console.log(message);

    
    let messageParagraph = document.createElement("p");
	messageParagraph.textContent = message;
    
	// container.appendChild(messageParagraph);

  form.appendChild(messageParagraph);

};
