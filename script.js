const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');
const secretCode = ['Preesha', 'Divyanshi', 'Tanvi'];
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = codeInput.value.trim();

  if (secretCode.includes(userInput)) {
    resultDiv.innerHTML = 'MadamJi';
    setTimeout(() => {
      window.location.href = nextPageUrl;
    }, 2000);
  } else {
    resultDiv.innerHTML = 'Tum mera "HoneyBun" Nahi ho, Voh Sabse Alag Hai!';
  }
});
