function handleLogin() {
  window.location.href = "login.html";
}

function handleContact() {
  alert("Kontaktformular kommt demnächst!");
}

function handleAbout() {
  alert("About-Seite wird bald verfügbar sein!");
}

function handleHype() {
  alert("Hype-Seite wird bald verfügbar sein!");
}

function handleExclusive() {    
  alert("Exclusive-Seite wird bald verfügbar sein!");
}

function handleGL() {
  alert("GameLounch-Seite wird bald verfügbar sein!");
}  

function handleYV() {
  alert("YuVideo-Seite wird bald verfügbar sein!");
}

function goHome() {
  window.location.href = "index.html";
}

function goAbout() {
  window.location.href = "about.html";
}

function openDiscord() {
  window.open("https://discord.com/invite/dein-server", "_blank");
}

function openYouTube() {
  window.open("https://youtube.com/@dein-kanal", "_blank");
}

function handleCredentialResponse(response) {
  const user = jwt_decode(response.credential);
  localStorage.setItem("user", JSON.stringify(user));
  showUser(user);
}

function showUser(user) {
  const profileContainer = document.getElementById("profile-container");
  profileContainer.innerHTML = `
    <img src="${user.picture}" alt="Profilbild" style="width:40px; height:40px; border-radius:50%; margin-left:10px;">
  `;
}

window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) showUser(user);
};