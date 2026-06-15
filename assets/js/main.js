const translations = {
  ru: {
    "nav.about":        "Обо мне",
    "nav.apps":         "Приложения",
    "nav.contact":      "Контакт",
    "nav.home":         "← На главную",
    "nav.title":        "Татьяна — iOS Разработчик",

    "hero.eyebrow":     "Senior iOS Developer",
    "hero.role":        "8+ лет в iOS разработке",
    "hero.desc":        "Разрабатываю нативные iOS-приложения с 2016 года. Работала в Movavi, Новотелеком, Improve Digital и Сбере. Сейчас строю собственные продукты.",
    "hero.btn.apps":    "Мои приложения",
    "hero.btn.contact": "Написать",
    "hero.name":        "Татьяна Макеева",

    "about.label":      "Обо мне",
    "about.title":      "iOS-инженер<br>из Новосибирска",
    "about.p1":         "Начала карьеру в 2016-м в Movavi — делала мобильный видеоредактор на Objective-C. Постепенно переходила от рядового разработчика к тимлиду: в Improve Digital руководила ревью четырёх iOS-разработчиков.",
    "about.p2":         "С 2020 года в Сбере, в команде SberDevices — разрабатываю голосовой помощник. Пишу unit- и snapshot-тесты, профилирую retain-циклы, настраиваю AVAudioSession.",
    "about.p3":         "Параллельно делаю собственные приложения — первое уже в App Store скоро.",

    "apps.label":       "Продукты",
    "apps.title":       "Мои приложения",

    "sc.cat":           "Кулинария · iOS",
    "sc.desc":          "Умный помощник для выпечки на закваске. Live Activity и Dynamic Island таймеры, пошаговые рецепты, уведомления.",
    "sc.soon":          "Скоро",
    "sc.page.title":    "SourdoughCooker — помощник пекаря",
    "sc.page.sub":      "Умный помощник для выпечки хлеба на закваске. Управляйте этапами ферментации, таймерами и рецептами — не пропустите ни одного шага.",
    "sc.page.soon":     "Скоро в App Store",
    "sc.page.about.h":  "О приложении",
    "sc.page.about.p":  "SourdoughCooker помогает домашним пекарям управлять каждым этапом выпечки хлеба на закваске.",
    "sc.page.f1":       "Пошаговые сценарии выпечки",
    "sc.page.f2":       "Таймеры ферментации и расстойки",
    "sc.page.f3":       "Live Activities и Dynamic Island",
    "sc.page.f4":       "Управление рецептами",
    "sc.page.f5":       "Локальные уведомления",
    "sc.page.links.h":  "Ссылки",
    "sc.page.support":  "Поддержка",
    "sc.page.privacy":  "Политика конфиденциальности",
    "sc.page.perms.h": "Разрешения",
    "sc.page.perms.p": "Приложение запрашивает разрешение на отправку уведомлений — исключительно для напоминания об окончании таймеров выпечки. Никакие персональные данные не собираются и не передаются третьим лицам.",
    "sc.page.terms": "Условия использования",

    "contact.label":    "Контакт",
    "contact.title":    "Давайте<br><span>поговорим</span>",
    "contact.sub":      "Открыта к вопросам, коллаборациям и разговорам о Swift, архитектуре или хлебе на закваске.",

    "footer.copy":      "© 2026 Татьяна Макеева",

    "support.nav.title": "Поддержка",
    "support.back":     "← SourdoughCooker",
    "support.page.title": "Поддержка — SourdoughCooker",
    "support.label":    "Помощь",
    "support.title":    "Поддержка",
    "support.sub":      "Ответы на частые вопросы о SourdoughCooker. Если не нашли нужного — напишите мне напрямую.",
    "support.q1":       "Таймер не отображается на Dynamic Island — что делать?",
    "support.a1":       "Убедитесь, что уведомления разрешены для приложения: Настройки → Уведомления → SourdoughCooker. Live Activity работает только на iPhone 14 Pro и новее.",
    "support.q2":       "Можно ли изменить длительность таймера?",
    "support.a2":       "Да! Нажмите на иконку карандаша рядом с таймером, чтобы задать нужные часы и минуты.",
    "support.q3":       "Приложение не присылает уведомление по окончании таймера",
    "support.a3":       "Проверьте, что уведомления для приложения включены. Если телефон в режиме «Не беспокоить», уведомления могут быть заблокированы системой.",
    "support.q4":       "Мои данные в безопасности?",
    "support.a4":       "Полностью. Все данные хранятся только на вашем устройстве. Мы не собираем никакую информацию о вас.",
    "support.contact.h":"Остались вопросы?",
    "support.contact.p":"Напишите мне — постараюсь ответить в течение 24 часов.",
    "support.contact.btn":"Написать письмо",

    "privacy.nav.title": "Политика конфиденциальности",
    "privacy.back":     "← SourdoughCooker",
    "privacy.page.title": "Политика конфиденциальности — SourdoughCooker",
    "privacy.label":    "Юридическое",
    "privacy.title":    "Политика конфиденциальности",
    "privacy.updated":  "Последнее обновление: январь 2024",
    "privacy.h1":       "Какие данные мы собираем",
    "privacy.p1":       "SourdoughCooker не собирает, не хранит и не передаёт никакие персональные данные. Все данные (рецепты, таймеры, настройки) хранятся исключительно на вашем устройстве.",
    "privacy.h2":       "Уведомления",
    "privacy.p2":       "Приложение запрашивает разрешение на отправку локальных уведомлений для напоминания о таймерах. Эти уведомления генерируются локально и не передаются на сервер.",
    "privacy.h3":       "Аналитика",
    "privacy.p3":       "Мы не используем сторонние сервисы аналитики. Никакие данные о вашем поведении в приложении не отслеживаются.",
    "privacy.h4":       "Дети",
    "privacy.p4":       "Приложение не предназначено для детей до 13 лет и не собирает данные о детях намеренно.",
    "privacy.h5":       "Изменения в политике",
    "privacy.p5":       "Если политика изменится, новая версия будет опубликована на этой странице с обновлённой датой.",
    "privacy.h6":       "Контакт",
    "privacy.p6":       "По любым вопросам о конфиденциальности пишите на:",

    "tos.title":  "Условия использования",
    "tos.updated": "Последнее обновление: июнь 2026",
    "tos.back":     "← SourdoughCooker",

    "tos.s1.h": "1. Принятие условий",
    "tos.s1.p": "Загружая или используя SourdoughCooker, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, пожалуйста, не используйте приложение.",

    "tos.s2.h": "2. Описание сервиса",
    "tos.s2.p": "SourdoughCooker — помощник по выпечке на закваске для iPhone. Приложение помогает управлять рецептами, отслеживать таймеры ферментации и следовать пошаговым инструкциям.",

    "tos.s3.h": "3. Интеграция с Google Drive",
    "tos.s3.p": "Приложение предлагает опциональное резервное копирование рецептов в Google Drive. Для этого требуется вход в аккаунт Google. Мы запрашиваем только минимально необходимые разрешения (доступ к файлам, созданным этим приложением). Мы не получаем доступ, не храним и не передаём другие файлы из вашего Google Drive. Вы можете отозвать доступ в любой момент через настройки аккаунта Google.",

    "tos.s4.h": "4. Пользовательский контент",
    "tos.s4.p": "Рецепты и данные о выпечке, созданные вами в приложении, принадлежат вам. Данные хранятся локально на устройстве. Резервное копирование в облако — опционально и под вашим контролем.",

    "tos.s5.h": "5. Ограничения использования",
    "tos.s5.p": "Вы соглашаетесь не злоупотреблять приложением, не пытаться осуществить его реверс-инжиниринг и не использовать его способами, нарушающими применимое законодательство.",

    "tos.s6.h": "6. Отказ от ответственности",
    "tos.s6.p": "Приложение предоставляется «как есть», без каких-либо гарантий. Мы не несём ответственности за потерю данных или ущерб, возникший в результате использования приложения.",

    "tos.s7.h": "7. Изменения",
    "tos.s7.p": "Мы можем периодически обновлять настоящие условия. Продолжение использования приложения после внесения изменений означает принятие новых условий.",

    "tos.s8.h": "8. Контакты",
    "tos.s8.p": "Есть вопросы? Свяжитесь с нами через <a href=\"support.html\">страницу поддержки</a>.",
  },
  en: {
    "nav.about":        "About",
    "nav.apps":         "Apps",
    "nav.contact":      "Contact",
    "nav.home":         "← Home",
    "nav.title":        "Tatiana — iOS Developer",

    "hero.eyebrow":     "Senior iOS Developer",
    "hero.role":        "8+ years in iOS development",
    "hero.desc":        "Building native iOS apps since 2016. Worked at Movavi, Novotelecom, Improve Digital and Sber. Currently building my own products.",
    "hero.btn.apps":    "My apps",
    "hero.btn.contact": "Contact me",
    "hero.name":        "Tatiana Makeeva",

    "about.label":      "About",
    "about.title":      "iOS Engineer<br>from Novosibirsk",
    "about.p1":         "Started my career in 2016 at Movavi building a mobile video editor in Objective-C. Grew from individual contributor to team lead: at Improve Digital I ran code reviews for a team of four iOS developers.",
    "about.p2":         "Since 2020 at Sber, on the SberDevices team — working on the voice assistant. I write unit and snapshot tests, profile retain cycles, and configure AVAudioSession.",
    "about.p3":         "In parallel, I build my own apps — the first one is coming to the App Store soon.",

    "apps.label":       "Products",
    "apps.title":       "My apps",

    "sc.cat":           "Food & Baking · iOS",
    "sc.desc":          "Smart sourdough baking companion. Live Activity and Dynamic Island timers, step-by-step recipes, notifications.",
    "sc.soon":          "Coming Soon",
    "sc.page.title":    "SourdoughCooker — Baking Assistant",
    "sc.page.sub":      "Sourdough baking assistant for iPhone. Track fermentation stages, manage timers, follow recipes and never miss an important step.",
    "sc.page.soon":     "Coming Soon to App Store",
    "sc.page.about.h":  "About",
    "sc.page.about.p":  "SourdoughCooker helps home bakers manage every stage of sourdough bread making.",
    "sc.page.f1":       "Step-by-step baking workflows",
    "sc.page.f2":       "Fermentation and proofing timers",
    "sc.page.f3":       "Live Activities and Dynamic Island support",
    "sc.page.f4":       "Recipe management",
    "sc.page.f5":       "Local notifications",
    "sc.page.links.h":  "Links",
    "sc.page.support":  "Support",
    "sc.page.privacy":  "Privacy Policy",
    "sc.page.perms.h": "Permissions",
    "sc.page.perms.p": "The app requests notification permission solely to alert you when a baking timer ends. No personal data is collected or shared with third parties.",
    "sc.page.terms": "Terms of Service",

    "contact.label":    "Contact",
    "contact.title":    "Let's<br><span>talk</span>",
    "contact.sub":      "Open to questions, collaborations, and conversations about Swift, architecture, or sourdough.",

    "footer.copy":      "© 2026 Tatiana Makeeva",

    "support.nav.title": "Support",
    "support.back":      "← SourdoughCooker",
    "support.page.title": "Support — SourdoughCooker",
    "support.label":    "Help",
    "support.title":    "Support",
    "support.sub":      "Answers to common questions about SourdoughCooker. If you can't find what you're looking for, reach out directly.",
    "support.q1":       "The timer isn't showing on the Dynamic Island — what should I do?",
    "support.a1":       "Make sure notifications are enabled in Settings → Notifications → SourdoughCooker. Live Activities only work on iPhone 14 Pro and later.",
    "support.q2":       "Can I edit the timer duration?",
    "support.a2":       "Yes! Tap the pencil icon next to the timer to set your own hours and minutes.",
    "support.q3":       "The app doesn't send a notification when the timer ends",
    "support.a3":       "Check that notifications are enabled for the app. If your phone is in Do Not Disturb mode, notifications may be suppressed by the system.",
    "support.q4":       "Is my data safe?",
    "support.a4":       "Absolutely. All data is stored only on your device. We collect no information about you.",
    "support.contact.h":"Still need help?",
    "support.contact.p":"Send me a message — I usually reply within 24 hours.",
    "support.contact.btn":"Send an email",

    "privacy.nav.title": "Privacy Policy",
    "privacy.back":     "← SourdoughCooker",
    "privacy.page.title": "Privacy Policy — SourdoughCooker",
    "privacy.label":    "Legal",
    "privacy.title":    "Privacy Policy",
    "privacy.updated":  "Last updated: January 2024",
    "privacy.h1":       "Data We Collect",
    "privacy.p1":       "SourdoughCooker does not collect, store, or transmit any personal data. All data (recipes, timers, preferences) is stored locally on your device only.",
    "privacy.h2":       "Notifications",
    "privacy.p2":       "The app requests permission to send local notifications to remind you about timers. These notifications are generated locally and are not transmitted to any server.",
    "privacy.h3":       "Analytics",
    "privacy.p3":       "We do not use any third-party analytics services. No data about your in-app behaviour is tracked.",
    "privacy.h4":       "Children",
    "privacy.p4":       "The app is not directed at children under 13 and does not knowingly collect data from children.",
    "privacy.h5":       "Changes to This Policy",
    "privacy.p5":       "If the policy changes, the new version will be published on this page with an updated date.",
    "privacy.h6":       "Contact",
    "privacy.p6":       "For any privacy questions, please contact:",

    "tos.title":  "Terms of Service",   
    "tos.updated": "Last updated: June 2026",
    "tos.back":     "← SourdoughCooker",

    "tos.s1.h": "1. Acceptance",
    "tos.s1.p": "By downloading or using SourdoughCooker, you agree to these Terms of Service. If you do not agree, please do not use the app.",

    "tos.s2.h": "2. Description of Service",
    "tos.s2.p": "SourdoughCooker is a baking assistant app for iPhone that helps you manage sourdough recipes, track fermentation timers, and follow step-by-step baking instructions.",

    "tos.s3.h": "3. Google Drive Integration",
    "tos.s3.p": "The app offers optional backup of your recipes to Google Drive. This requires you to sign in with your Google account. We request only the minimum necessary permissions (access to files created by this app). We do not access, store, or share any other files from your Google Drive. You may revoke access at any time via your Google account settings.",

    "tos.s4.h": "4. User Content",
    "tos.s4.p": "Recipes and baking data you create in the app belong to you. The app stores this data locally on your device. Cloud backup is optional and under your control.",

    "tos.s5.h": "5. Prohibited Use",
    "tos.s5.p": "You agree not to misuse the app, attempt to reverse-engineer it, or use it in any way that violates applicable laws.",

    "tos.s6.h": "6. Disclaimer",
    "tos.s6.p": "The app is provided \"as is\" without warranties of any kind. We are not responsible for any loss of data or damages arising from use of the app.",

    "tos.s7.h": "7. Changes",
    "tos.s7.p": "We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.",

    "tos.s8.h": "8. Contact",
    "tos.s8.p": "Questions? Reach us via the <a href=\"support.html\">support page</a>.",
  }
}

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
  const saved = localStorage.getItem("lang") || "ru";
  setLang(saved);
});