const darkModeToggle = document.getElementById("darkMode");
const heroLogo = document.getElementById("heroLogo");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

darkModeToggle.addEventListener("click", () => {
    
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
    heroLogo.src = "assets/images/Naviko Dark.png";
    themeIcon.classList.replace("fa-moon", "fa-sun");
    themeText.textContent = "Mode clair";
  } else {
    heroLogo.src = "assets/images/Naviko Main.png";
    themeIcon.classList.replace("fa-sun", "fa-moon");
    themeText.textContent = "Mode sombre";
  }
});