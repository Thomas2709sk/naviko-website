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
        // Presentation section

        presTitle: "Présentation",
        presTitle2: "Pourquoi Naviko ?",
        presText: "Se déplacer en ville représente encore aujourd'hui un défi pour de nombreuses personnes malvoyantes. Malgré les aides existantes comme la canne blanche ou le chien guide, certaines informations de l'environnement restent difficiles à percevoir rapidement. Naviko a été imaginé comme un compagnon numérique venant compléter ces aides afin d'offrir davantage de sérénité et d'autonomie lors des déplacements.",
        presTitle3: "Votre compagnon de déplacement",
        presText2: "Naviko est une application mobile conçue pour accompagner les personnes malvoyantes dans leurs déplacements. Grâce à l'intelligence artificielle et à la caméra du smartphone, l'application identifie les éléments importants de l'environnement, tels que les passages piétons, les obstacles ou les feux de signalisation, puis informe l'utilisateur à l'aide d'un retour vocal ou vibratoire.",
        presText3: "Développé par une personne malvoyante, Naviko est conçu avec une attention particulière portée à l'accessibilité, à la simplicité et aux besoins du quotidien",
        download: "Télécharger l'application",
        downloadBtn: "Disponible sur Google Play",

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
        
        // Presentation section
        presTitle: "Presentation",
        presTitle2: "Why Naviko ?",
        presText: "Getting around town is still a challenge today for many visually impaired people. Despite existing aids like the white cane or guide dog, certain environmental details remain difficult to pick up quickly. Naviko was designed as a digital companion to complement these aids, offering greater peace of mind and independence on the move.",
        presTitle3: "Your travel companion",
        presText2: "Naviko is a mobile app designed to support visually impaired people on the move. Powered by artificial intelligence and the smartphone’s camera, the app identifies key environmental features—such as pedestrian crossings, obstacles, or traffic lights—and alerts the user through audio or haptic feedback.",
        presText3: "Developed by a visually impaired creator, Naviko is built with a strong focus on accessibility, simplicity, and everyday needs.",
        download: "Download the application",
        downloadBtn: "Available on Google Play",
        

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