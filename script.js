const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');
const secretCode = ['Preesha', 'Divyanshi', 'Tanvi'];
const nextPageUrl = 'main.html';
const ipGeolocationApiKey = "7fed0bea17ae4964ac8dd8ccd83fb726"; // Replace with a valid key

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

          // Fetch geolocation details using ipgeolocation.io
          return axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${ipGeolocationApiKey}&ip=${userIP}&fields=geo,isp`);
        })
        .then(response => {
          const data = response.data;
          const phoneCarrier = data.isp || "Not Available";
          const city = data.city || "Unknown City";
          const country = data.country_name || "Unknown Country";

          console.log(`Location: ${latitude}, ${longitude}`);
          console.log(`City: ${city}, Country: ${country}`);
          console.log(`ISP/Carrier: ${phoneCarrier}`);

          resultDiv.innerHTML += `<br>Location traced: ${latitude}, ${longitude}<br>City: ${city}, Country: ${country}<br>ISP/Carrier: ${phoneCarrier}`;
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
