document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LANGUAGE SWITCH
    ========================== */

    const button = document.getElementById("lang-toggle");

    let lang = localStorage.getItem("siteLanguage") || "de";

    function applyLanguage(language) {

        document.querySelectorAll("[data-de]").forEach(el => {

            el.innerHTML =
                language === "de"
                ? el.dataset.de
                : el.dataset.en;

        });

        document.documentElement.lang = language;

        if (button) {

            button.textContent =
                language === "de"
                ? "EN"
                : "DE";

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
