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

		resultDiv.style.display = 'block';
	});
});
