document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LANGUAGE SWITCH
    ========================== */

    const button = document.getElementById("lang-toggle");

    let lang = localStorage.getItem("siteLanguage") || "de";

function applyLanguage(language) {
    // Normale Texte
    document.querySelectorAll("[data-de]").forEach(el => {
        el.innerHTML = language === "de"
            ? el.dataset.de
            : el.dataset.en;
    });

    document.documentElement.lang = language;

    if (button) {
        button.textContent = language === "de" ? "EN" : "DE";
    }

    // Select „Business Area“ umschalten
    const select = document.getElementById("business-area");
    if (select) {
        const options = language === "de"
            ? [
                { value: "", text: "Geschäftsbereich wählen" },
                { value: "Strategy", text: "Strategie" },
                { value: "Business Development", text: "Unternehmensentwicklung" },
                { value: "Market Entry", text: "Markteintritt" },
                { value: "Process Optimization", text: "Prozessoptimierung" },
                { value: "Digitalization", text: "Digitalisierung" },
                { value: "Artificial Intelligence", text: "Künstliche Intelligenz" },
                { value: "Other", text: "Sonstiges" }
              ]
            : [
                { value: "", text: "Select Business Area" },
                { value: "Strategy", text: "Strategy" },
                { value: "Business Development", text: "Business Development" },
                { value: "Market Entry", text: "Market Entry" },
                { value: "Process Optimization", text: "Process Optimization" },
                { value: "Digitalization", text: "Digitalization" },
                { value: "Artificial Intelligence", text: "Artificial Intelligence" },
                { value: "Other", text: "Other" }
              ];

        // Aktuell ausgewählten Wert merken
        const currentValue = select.value;

        // Optionen neu aufbauen
        select.innerHTML = "";
        options.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt.value;
            option.textContent = opt.text;
            select.appendChild(option);
        });

        // Alten Wert wieder setzen (falls vorhanden)
        select.value = currentValue;
    }
}

    applyLanguage(lang);

    if (button) {

        button.addEventListener("click", () => {

            lang = lang === "de"
                ? "en"
                : "de";

            localStorage.setItem(
                "siteLanguage",
                lang
            );

            applyLanguage(lang);

        });

    }

    /* ==========================
       COOKIE BANNER
    ========================== */

    const banner =
        document.getElementById("cookie-banner");

    if (banner) {

        const consent =
            localStorage.getItem("cookieConsent");

        if (consent) {

            banner.style.display = "none";

        }

        const acceptBtn =
            document.getElementById("accept-cookies");

        const declineBtn =
            document.getElementById("decline-cookies");

        if (acceptBtn) {

            acceptBtn.addEventListener("click", () => {

                localStorage.setItem(
                    "cookieConsent",
                    "accepted"
                );

                banner.style.display = "none";

            });

        }

        if (declineBtn) {

            declineBtn.addEventListener("click", () => {

                localStorage.setItem(
                    "cookieConsent",
                    "declined"
                );

                banner.style.display = "none";

            });

        }

    }

});
