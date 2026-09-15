document.querySelectorAll(".segment-card").forEach(card => {
  card.addEventListener("click", () => {
    const action = card.dataset.action;
    if (action === "renter") {
      document.getElementById("buscar").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => document.getElementById("location").focus(), 500);
    } else {
      document.getElementById("registro").scrollIntoView({ behavior: "smooth" });
    }
  });
});

const form = document.getElementById("searchForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = document.getElementById("location").value.trim();
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const need = document.getElementById("need").value;

  if (!location || !start || !end || !need) {
    message.textContent = "Completa todos los campos para buscar un vehículo.";
    return;
  }

  if (end < start) {
    message.textContent = "La fecha de devolución debe ser posterior a la fecha de inicio.";
    return;
  }

  message.textContent = `Buscando vehículos para ${need.toLowerCase()} en ${location}...`;
});

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");
const currentLanguage = document.getElementById("currentLanguage");

function cambiarIdioma(lang) {

    const translations =
        lang === "en"
            ? translationsEN
            : translationsES;


    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }

    });


    document.querySelectorAll("[data-i18n-html]").forEach(element => {

        const key = element.dataset.i18nHtml;

        if (translations[key]) {
            element.innerHTML = translations[key];
        }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[key]) {
            element.placeholder = translations[key];
        }

    });


    document.querySelectorAll("[data-i18n-aria]").forEach(element => {

        const key = element.dataset.i18nAria;

        if (translations[key]) {
            element.setAttribute("aria-label", translations[key]);
        }

    });


    localStorage.setItem("veygoLanguage", lang);

    document.documentElement.lang = lang;

    currentLanguage.textContent =
        lang === "en"
            ? "English"
            : "Español";
}