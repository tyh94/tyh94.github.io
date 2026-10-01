---
---
// Тексты лежат в _data/translations.json: Jekyll вписывает английский прямо в HTML страниц,
// чтобы их видели роботы без JS (проверка Google OAuth), а здесь они нужны для переключения языка.
const translations = {{ site.data.translations | jsonify }};

let currentLang = 'ru';

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.getElementById("btn-ru")?.classList.toggle("active", lang === "ru");
  document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

  // App Store badge locale
  const badge = document.getElementById("appstore-badge");
  if (badge) {
    badge.src = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${lang === "ru" ? "ru-ru" : "en-us"}`;
  }
}


function setLang(lang) {
  currentLang = lang;
  applyTranslations(lang);
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Без сохранённого выбора — язык браузера: англоязычный посетитель (и проверяющий
  // робот Google) должен видеть ту же английскую версию, что и в HTML.
  const browserLang = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
  const saved = localStorage.getItem("lang") || browserLang;
  setLang(saved);
});