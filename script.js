const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const secretCode = ['Preesha', 'Divyanshi', 'Tanvi'];
const nextPageUrl = 'main.html';
const ipGeolocationApiKey = "44c49e0337f9467c98b92eecea6e363b";

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = codeInput.value.trim();
  
  if (secretCode.includes(userInput)) {
    resultDiv.innerHTML = 'MadamJi';
    
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch user's public IP
      axios.get('https://api64.ipify.org?format=json')
        .then(response => {
          const userIP = response.data.ip;

          // Fetch phone number details based on IP
          return axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${ipGeolocationApiKey}&ip=${userIP}`);
        })
        .then(response => {
          const phoneNumberData = response.data;
          const phoneNumber = phoneNumberData.connection.ipv4 + " (approximated)"; 
          
          console.log(`Location: ${latitude},${longitude} Phone Number: ${phoneNumber}`);
          resultDiv.innerHTML += `<br>Location traced: ${latitude},${longitude}<br>Phone Number traced: ${phoneNumber}`;
        })
        .catch(error => console.error("Error fetching IP details:", error));
    });

    setTimeout(() => {
      window.location.href = nextPageUrl;
    }, 2000);
  } else {
    resultDiv.innerHTML = 'Tum mera "HoneyBun" Nahi ho, Voh Sabse Alag Hai!';
  }
});
