const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = ['Preesha', 'Divyanshi'];
const nextPageUrl = 'main.html'; // Make sure this file exists

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	
	if (secretCode.includes(userInput)) {  // ✅ Fix: Check if input is in the array
		resultDiv.innerHTML = 'Baby';
		setTimeout(() => {
			window.location.href = nextPageUrl; // ✅ Redirect after a short delay
		}, 1000);
	} else {
		resultDiv.innerHTML = 'Tum mera "HoneyBun" Nahi ho, Voh Sabse Alag Hai!';
	}
});
