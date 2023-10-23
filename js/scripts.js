document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('questionnaire');
	const resultDiv = document.querySelector('.hidden');

	form.addEventListener('submit', function (e) {
		e.preventDefault(); 

		// pull user response
		const siblingsAnswer = document.querySelector('input[name="siblings"]:checked').value;
		const coffeeAnswer = document.getElementById('drinks').value;
		const colorAnswer = document.getElementById('color').value;
		const shotAnswer = document.getElementById('shot').value;
		const carAnswer = document.querySelector('input[name="car"]:checked').value;

		// Determine language based on the answer
		let codingLanguage;

		if (siblingsAnswer === 'zero') {
			codingLanguage = 'Ruby';
		} else if (siblingsAnswer === 'one') {
			codingLanguage = 'Python';
		} else {
			codingLanguage = 'Rust';
		}

		// Display result in hidden div
		resultDiv.innerHTML = `
			<h2>You should learn this coding language:</h2>
			<div id="${codingLanguage}">
				<h2>${codingLanguage}</h2>
				<!-- Add the relevant image and description here -->
			</div>
		`;

		// Show the result
		resultDiv.style.display = 'block';
	});
});

/*
function getResults(event) {
	event.preventDefault();
	let zero = document.getElementById("zero");
	let one = document.getElementById("one");
	let 2plus = document.getElementById("2plus");
}

------
	
	
window.onload = function () {
	let form = document.querySelector("form");
	form.onsubmit = function (event) {
		event.preventDefault();
		document.getElementById("Ruby").setAttribute("class", "hidden");
		document.getElementById("Python").setAttribute("class", "hidden");
		document.getElementById("Rust").setAttribute("class", "hidden");
	}

	const siblings = document.getElementById("siblings").value;

	if (siblings === "zero") {
		document.getElementById("Ruby").removeAttribute("class");
	}
	else if (siblings === "one") {
		document.getElementById("Python").removeAttribute("class");
	}
	else (siblings === "2plus").removeAttribute("class");
}













/*
const answers = document.getElementById('answers');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const questionForm = document.getElementById('questionForm');

function getAnswers() {
		const siblingAnswer = document.querySelector('input[name="siblings"]:checked').value;
		const colorAnswer = document.querySelector('select[name="favoriteColor"]').value;
		const shotAnswer = document.querySelector('input[name="shotChoice"]:checked').value;

		answer1.textContent = `Answer 1: Siblings - ${siblingAnswer}, Favorite Color - ${colorAnswer}, Shot - ${shotAnswer}`;
}

questionForm.addEventListener('submit', function (e) {
		e.preventDefault();
		getAnswers();
		clearForm();
});

function clearForm() {
		questionForm.reset();
}
*/
