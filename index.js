
function getData() {

	const userText = document.getElementById("textbox1"); // gets the element with the id of textbox1
	const outputBox = document.getElementById("userOutput"); // gets the element with the id of userOutput


	// using .value will return the current text in the element. Returns as a string
	outputBox.innerHTML = userText.value; // sets the text of the output to the current text that is in textbox1 
	userText.value = ""; // resets the textbox1
}


