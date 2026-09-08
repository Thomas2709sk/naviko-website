const translations = {
    fr: {
        darkTheme: "Mode sombre",
        lightTheme: "Mode clair",
        heroTitle: "Un compagnon intelligent à vos côtés",
        // Menu
        menu1: "Présentation",
        menu2: "Fonctionnalités",
        menu3: "Comment utiliser Naviko",
        menu4: "Téléchargement",


    },
    en: {
        darkTheme: "Dark mode",
        lightTheme: "Light mode",
        heroTitle: "A smart companion by your side",
        // Menu
        menu1:"Presentation",
        menu2: "Features",
        menu3: "How to use Naviko",
        menu4: "Download",


    }
};

let currentLang = localStorage.getItem("lang") || "fr";

function updateLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });


    const flagEn = document.getElementById("flagEn");
    const flagFr = document.getElementById("flagFr");

    if (lang === "fr") {
        flagEn?.classList.remove("d-none"); 
        flagFr?.classList.add("d-none");
    } else {
        flagFr?.classList.remove("d-none");
        flagEn?.classList.add("d-none");
    }

    localStorage.setItem("lang", lang);
    currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);

    document.getElementById("langToggle")?.addEventListener("click", () => {
        const nextLang = currentLang === "fr" ? "en" : "fr";
        updateLanguage(nextLang);
    });
});