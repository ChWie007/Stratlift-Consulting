document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       SPRACHUMSCHALTER
    ========================== */

    const button = document.getElementById("lang-toggle");

    let lang = "de";

    // Deutsche Texte direkt beim Laden anzeigen

    document.querySelectorAll("[data-de]").forEach(el => {
        el.innerHTML = el.dataset.de;
    });

    if (button) {

        button.addEventListener("click", () => {

            lang = lang === "de" ? "en" : "de";

            button.textContent =
                lang === "de"
                ? "EN"
                : "DE";

            document.documentElement.lang = lang;

            document.querySelectorAll("[data-de]").forEach(el => {

                el.innerHTML =
                    lang === "de"
                    ? el.dataset.de
                    : el.dataset.en;

            });

        });

    }

    /* ==========================
       COOKIE BANNER
    ========================== */

    const banner = document.getElementById("cookie-banner");

    if (banner) {

        const accepted = localStorage.getItem("cookieConsent");

        if (accepted) {
            banner.style.display = "none";
        }

        const acceptBtn = document.getElementById("accept-cookies");
        const declineBtn = document.getElementById("decline-cookies");

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
