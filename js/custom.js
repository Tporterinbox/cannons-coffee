/* JavaScript coming soon! */

let form = document.querySelector("#form");
console.log(form);
form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
	event.preventDefault();

	const data = new FormData(event.target);

	const dataObject = Object.fromEntries(data.entries());

	console.log(dataObject);

	form.reset();
}
