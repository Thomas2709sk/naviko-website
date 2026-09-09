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

        // Features section
        featuresTitle: "Fonctionnalités",
        featuresTitle2:"Une détection intelligente",
        featuresText: "Naviko analyse l'environnement grâce à la caméra du smartphone et à l'intelligence artificielle afin d'identifier les éléments importants lors des déplacements.",
        featuresTitle3: "Une détection intelligente de votre environnement",
        featuresText2: "Grâce à l'intelligence artificielle, Naviko est capable de reconnaître les principaux éléments de l'environnement, tels que les passages piétons, les feux de signalisation, les obstacles, les véhicules ou les piétons. Cette analyse permet de fournir une assistance adaptée aux situations rencontrées lors des déplacements.",
        featuresTitle4: "Anticiper les obstacles",
        featuresText3: "Les obstacles susceptibles de gêner ou de compromettre un déplacement sont détectés afin d'alerter rapidement l'utilisateur. Qu'il s'agisse d'un véhicule, d'un obstacle temporaire ou d'un élément du mobilier urbain, Naviko contribue à rendre les trajets plus sereins.",
        featuresTitle5: "Une assistance qui s'adapte à vous",
        featuresText4: "Naviko vous informe en temps réel grâce à des alertes vocales claires et des vibrations discrètes. Les informations importantes sont communiquées sans détourner votre attention de votre environnement, pour accompagner chacun de vos déplacements.",
    
        // How to use section
        howTitle: "Comment utiliser Naviko ?",
        howTitle2: "Mode d’emploi",
        howTitle3: "Première utilisation",
        howText: "Lors du premier lancement, Naviko vous demandera d'autoriser l'accès à l'appareil photo et d'accepter les conditions d'utilisation afin de vous accompagner lors de vos déplacements en toute sécurité.",
        howText2: "* L'accès à l'appareil photo et l'acceptation des conditions d'utilisation sont requis pour utiliser les fonctionnalités de Naviko.",
        howTitle4: "Analyse en temps réel",
        howText3: "Naviko analyse votre environnement en temps réel afin de détecter les passages piétons, les feux, les piétons et les obstacles importants.",
        howText4: "Les performances de détection peuvent varier selon les conditions d'éclairage et l'environnement",
        howTitle5: "Personnalisez Naviko",
        howText5: "Ajustez la voix, le contraste, la taille du texte et les préférences d'accessibilité afin d'adapter Naviko à vos besoins.",
        howText6: "Les paramètres peuvent être modifiés à tout moment depuis le menu de l'application",


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

        // Features section
        featuresTitle: "Features",
        featuresTitle2:"Smart detection",
        featuresText: "Naviko uses the smartphone camera and artificial intelligence to analyze the environment and identify key features while on the move.",
        featuresTitle3: "Smart detection for your surroundings",
        featuresText2: "Using artificial intelligence, Naviko can recognize key surroundings like pedestrian crossings, traffic lights, obstacles, vehicles, and pedestrians. This analysis provides context-aware assistance tailored to real-time situations.",
        featuresTitle4: "Anticipating obstacles",
        featuresText3: "Potential hazards that could disrupt or jeopardize travel are detected to quickly alert the user. Whether it is a vehicle, a temporary obstacle, or street furniture, Naviko helps make journeys smoother and more reassuring.",
        featuresTitle5: "Assistance that adapts to you",
        featuresText4: "Naviko keeps you informed in real time with clear voice alerts and subtle vibrations. Essential information is delivered without distracting you from your surroundings, supporting you every step of the way.",

        // How to use section
        howTitle: "How to use Naviko ?",
        howTitle2: "User guide",
        howTitle3: "First use",
        howText: "When you first open Naviko, you will be asked to grant camera access and accept the terms of use to support you safely on every journey.",
        howText2: "*Camera access and acceptance of the terms of use are required to use Naviko’s features.",
        howTitle4: "Real-time analysis",
        howText3: "Naviko analyzes your surroundings in real time to detect pedestrian crossings, traffic lights, pedestrians, and major obstacles.",
        howText4: "Detection performance may vary depending on lighting conditions and surroundings.",
        howTitle5: "Customize Naviko",
        howText5: "Adjust the voice, contrast, text size, and accessibility settings to tailor Naviko to your needs.",
        howText6: "Settings can be changed at any time from the app menu.",
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