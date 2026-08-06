const button = document.getElementById("lang-toggle");

let lang = "de";

button.addEventListener("click", () => {

    lang = lang === "de" ? "en" : "de";

    button.textContent =
        lang === "de"
        ? "EN"
        : "DE";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-de]").forEach(el => {

        if (lang === "de") {
            el.innerHTML = el.dataset.de;
        } else {
            el.innerHTML = el.dataset.en;
        }

    });

});

// COOKIE BANNER

document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("cookie-banner");

    if (!banner) return;

    const accepted = localStorage.getItem("cookieConsent");

    if (accepted) {
        banner.style.display = "none";
    }

    document.getElementById("accept-cookies").addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });

    document.getElementById("decline-cookies").addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        banner.style.display = "none";
    });

});

const button = document.getElementById("lang-toggle");

let lang = "de";

/* TEXT BEIM LADEN SOFORT SETZEN */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-de]").forEach(el => {
        el.textContent = el.dataset.de;
    });

});

/* SPRACHUMSCHALTER */

button.addEventListener("click", () => {

    lang = lang === "de" ? "en" : "de";

    button.textContent = lang === "de" ? "EN" : "DE";

    document.querySelectorAll("[data-de]").forEach(el => {

        el.textContent =
            lang === "de"
            ? el.dataset.de
            : el.dataset.en;

    });

});
