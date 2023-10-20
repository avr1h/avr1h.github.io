document.addEventListener("DOMContentLoaded", function() {
  const splashMessages = [
    "Unbelievably Jewish!",
    "Message 2",
    "Message 3",
    "First Time?",
    "Here King, You Dropped This 👑",
    "Philately Enthusiast.",
    "Seiko Supremacy!",
    "Samsung Supremacy!",
    "e^πi=1",
    "Chaotically Neutral to His Detriment.",
    "¯\_(ツ)_/¯",
    "My Enemies Are Plenty, My Equals Are Non.",
    "Does He Ever Shut Up?",
    "Oxford Comma Elitist"
  ];
  const randomMessage = splashMessages[Math.floor(Math.random() * splashMessages.length)];
  document.getElementById("randomSplashMessage").textContent = randomMessage;
});
