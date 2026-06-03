function setLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-ru]").forEach(el => {
        el.innerHTML = el.getAttribute("data-" + lang);
    });

    const btnRu = document.getElementById("btn-ru");
    const btnEn = document.getElementById("btn-en");

    if (btnRu) btnRu.classList.toggle("active", lang === "ru");
    if (btnEn) btnEn.classList.toggle("active", lang === "en");

    localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "ru";
    setLang(savedLang);
});