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
