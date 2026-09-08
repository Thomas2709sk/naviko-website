const darkModeToggle = document.getElementById("darkMode");
const heroLogo = document.getElementById("heroLogo");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");


function updateThemeUI(isDark) {
    if (heroLogo) heroLogo.src = isDark ? "assets/images/Naviko Dark.png" : "assets/images/Naviko Main.png";
    if (themeIcon) themeIcon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    if (themeText) themeText.textContent = isDark ? "Mode clair" : "Mode sombre";
}


const isDark = localStorage.getItem("darkMode") === "enabled";
if (isDark) {
    document.body.classList.add("dark-mode");
}
updateThemeUI(isDark);


darkModeToggle?.addEventListener("click", () => {
    const isNowDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isNowDark ? "enabled" : "disabled");
    updateThemeUI(isNowDark);
});