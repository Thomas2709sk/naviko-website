const darkModeToggle = document.getElementById("darkMode");
const heroLogo = document.getElementById("heroLogo");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const savedTheme = localStorage.getItem("darkMode");

if (savedTheme === "enabled") {
    document.body.classList.add("dark-mode");

    // Utilisation de l'optional chaining pour éviter l'erreur si l'élément est null
    if (heroLogo) heroLogo.src = "assets/images/Naviko Dark.png";
    if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
    if (themeText) themeText.textContent = "Mode clair";
}

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        if (isDark) {
            if (heroLogo) heroLogo.src = "assets/images/Naviko Dark.png";
            if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
            if (themeText) themeText.textContent = "Mode clair";

            localStorage.setItem("darkMode", "enabled");
        } else {
            if (heroLogo) heroLogo.src = "assets/images/Naviko Main.png";
            if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
            if (themeText) themeText.textContent = "Mode sombre";

            localStorage.setItem("darkMode", "disabled");
        }
    });
}