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
    "page.soon":        "Скоро в App Store",
    "soon":             "Скоро",

    "sc.cat":           "Кулинария · iOS",
    "sc.desc":          "Умный помощник для выпечки на закваске. Live Activity и Dynamic Island таймеры, пошаговые рецепты, уведомления.",
    "sc.page.title":    "SourdoughCooker — помощник пекаря",
    "sc.page.sub":      "Умный помощник для выпечки хлеба на закваске. Управляйте этапами ферментации, таймерами и рецептами — не пропустите ни одного шага.",
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

    "sc.tos.s8.p": "Есть вопросы? Свяжитесь с нами через <a href=\"support.html\">страницу поддержки</a>.",
    "sc.support.nav.title": "Поддержка",
    "sc.support.back":     "← SourdoughCooker",
    "sc.support.page.title": "Поддержка — SourdoughCooker",
    "sc.support.label":    "Помощь",
    "sc.support.title":    "Поддержка",
    "sc.support.sub":      "Ответы на частые вопросы о SourdoughCooker. Если не нашли нужного — напишите мне напрямую.",
    "sc.support.q1":       "Таймер не отображается на Dynamic Island — что делать?",
    "sc.support.a1":       "Убедитесь, что уведомления разрешены для приложения: Настройки → Уведомления → SourdoughCooker. Live Activity работает только на iPhone 14 Pro и новее.",
    "sc.support.q2":       "Можно ли изменить длительность таймера?",
    "sc.support.a2":       "Да! Нажмите на иконку карандаша рядом с таймером, чтобы задать нужные часы и минуты.",
    "sc.support.q3":       "Приложение не присылает уведомление по окончании таймера",
    "sc.support.a3":       "Проверьте, что уведомления для приложения включены. Если телефон в режиме «Не беспокоить», уведомления могут быть заблокированы системой.",
    "sc.support.q4":       "Мои данные в безопасности?",
    "sc.support.a4":       "Полностью. Все данные хранятся только на вашем устройстве. Мы не собираем никакую информацию о вас.",
    "sc.support.contact.h":"Остались вопросы?",
    "sc.support.contact.p":"Напишите мне — постараюсь ответить в течение 24 часов.",
    "sc.support.contact.btn":"Написать письмо",

    "sc.privacy.nav.title": "Политика конфиденциальности",
    "sc.privacy.back":     "← SourdoughCooker",
    "sc.privacy.page.title": "Политика конфиденциальности — SourdoughCooker",
    "sc.privacy.label":    "Юридическое",
    "sc.privacy.title":    "Политика конфиденциальности",
    "sc.privacy.updated":  "Последнее обновление: январь 2024",
    "sc.privacy.h1":       "Какие данные мы собираем",
    "sc.privacy.p1":       "SourdoughCooker не собирает, не хранит и не передаёт никакие персональные данные. Все данные (рецепты, таймеры, настройки) хранятся исключительно на вашем устройстве.",
    "sc.privacy.h2":       "Уведомления",
    "sc.privacy.p2":       "Приложение запрашивает разрешение на отправку локальных уведомлений для напоминания о таймерах. Эти уведомления генерируются локально и не передаются на сервер.",
    "sc.privacy.h3":       "Аналитика",
    "sc.privacy.p3":       "Мы не используем сторонние сервисы аналитики. Никакие данные о вашем поведении в приложении не отслеживаются.",
    "sc.privacy.h4":       "Дети",
    "sc.privacy.p4":       "Приложение не предназначено для детей до 13 лет и не собирает данные о детях намеренно.",
    "sc.privacy.h5":       "Изменения в политике",
    "sc.privacy.p5":       "Если политика изменится, новая версия будет опубликована на этой странице с обновлённой датой.",
    "sc.privacy.h6":       "Контакт",
    "sc.privacy.p6":       "По любым вопросам о конфиденциальности пишите на:",

    "sc.tos.title":  "Условия использования",
    "sc.tos.updated": "Последнее обновление: 25 июня 2026",
    "sc.tos.back":     "← SourdoughCooker",

    "sc.tos.s1.h": "1. Принятие условий",
    "sc.tos.s1.p": "Загружая или используя SourdoughCooker, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, пожалуйста, не используйте приложение.",

    "sc.tos.s2.h": "2. Описание сервиса",
    "sc.tos.s2.p": "SourdoughCooker — помощник по выпечке на закваске для iPhone. Приложение помогает управлять рецептами, отслеживать таймеры ферментации и следовать пошаговым инструкциям.",

    "sc.tos.s3.h": "3. Интеграция с Google Drive",
    "sc.tos.s3.p": "Приложение предлагает опциональное резервное копирование рецептов в Google Drive. Для этого требуется вход в аккаунт Google. Мы запрашиваем только минимально необходимые разрешения (доступ к файлам, созданным этим приложением). Мы не получаем доступ, не храним и не передаём другие файлы из вашего Google Drive. Вы можете отозвать доступ в любой момент через настройки аккаунта Google.",

    "sc.tos.s4.h": "4. Пользовательский контент",
    "sc.tos.s4.p": "Рецепты и данные о выпечке, созданные вами в приложении, принадлежат вам. Данные хранятся локально на устройстве. Резервное копирование в облако — опционально и под вашим контролем.",

    "sc.tos.s5.h": "5. Ограничения использования",
    "sc.tos.s5.p": "Вы соглашаетесь не злоупотреблять приложением, не пытаться осуществить его реверс-инжиниринг и не использовать его способами, нарушающими применимое законодательство.",

    "sc.tos.s6.h": "6. Отказ от ответственности",
    "sc.tos.s6.p": "Приложение предоставляется «как есть», без каких-либо гарантий. Мы не несём ответственности за потерю данных или ущерб, возникший в результате использования приложения.",

    "sc.tos.s7.h": "7. Изменения",
    "sc.tos.s7.p": "Мы можем периодически обновлять настоящие условия. Продолжение использования приложения после внесения изменений означает принятие новых условий.",

    "sc.tos.s8.h": "8. Контакты",

    "ffd.cat": "Питание и здоровье",
    "ffd.desc": "Дневник питания для всей семьи с анализом калорий, витаминов, минералов и других нутриентов.",

    "ffd.page.title": "Family Food Diary — Дневник питания семьи",

    "ffd.page.sub": "Следите за рационом всей семьи. Контролируйте калории, БЖУ, железо, магний, витамины и другие нутриенты.",

    "ffd.page.about.h": "Возможности",

    "ffd.page.about.p": "Удобный способ вести дневник питания для всей семьи и анализировать качество рациона.",

    "ffd.page.f1": "Добавляйте записи для нескольких членов семьи",
    "ffd.page.f2": "Отслеживайте калории, белки, жиры и углеводы",
    "ffd.page.f3": "Контролируйте железо, магний, кальций, витамины и другие нутриенты",
    "ffd.page.f4": "Находите продукты-лидеры по содержанию полезных веществ",
    "ffd.page.f5": "Изучайте статистику и историю питания",

    "ffd.page.why.h": "Почему Family Food Diary?",

    "ffd.page.why.f1": "Для всей семьи — ведите записи для себя, детей и близких",
    "ffd.page.why.f2": "Не только калории — анализируйте десятки витаминов и минералов",
    "ffd.page.why.f3": "Ваши данные остаются у вас — хранение на Google Drive или Яндекс Диске",

    "ffd.page.privacy.h": "Ваши данные",

    "ffd.page.privacy.p": "Приложение не использует собственные серверы для хранения данных. Вы сами выбираете, где хранить свой дневник питания — в Google Drive или Яндекс Диске.",

    "ffd.page.links.h": "Полезные ссылки",
    "ffd.page.support": "Поддержка",
    "ffd.page.privacy": "Политика конфиденциальности",
    "ffd.page.terms": "Условия использования",

    "ffd.privacy.page.title": "Политика конфиденциальности — Family Food Diary",
    "ffd.privacy.nav.title": "Политика конфиденциальности",
    "ffd.privacy.back": "← Назад",
    "ffd.privacy.label": "Family Food Diary",
    "ffd.privacy.title": "Политика конфиденциальности",
    "ffd.privacy.updated": "Последнее обновление: 25 июня 2026 г.",

    "ffd.privacy.h1": "1. Общие положения",
    "ffd.privacy.p1": "Family Food Diary уважает вашу конфиденциальность. Приложение предназначено для ведения дневника питания и не собирает персональные данные для передачи третьим лицам.",

    "ffd.privacy.h2": "2. Какие данные хранятся",
    "ffd.privacy.p2": "Приложение может хранить информацию о приёмах пищи, продуктах, фотографиях блюд, статистике питания и других данных, которые вы добавляете самостоятельно.",

    "ffd.privacy.h3": "3. Где хранятся данные",
    "ffd.privacy.p3": "Данные хранятся локально на вашем устройстве и/или в выбранном вами облачном хранилище (Google Drive или Яндекс Диск). Разработчик приложения не имеет доступа к этим данным.",

    "ffd.privacy.h4": "4. Передача данных третьим лицам",
    "ffd.privacy.p4": "Приложение не продаёт, не передаёт и не предоставляет ваши данные третьим лицам. Все данные остаются под вашим контролем.",

    "ffd.privacy.h5": "5. Разрешения",
    "ffd.privacy.p5": "Приложение может запрашивать доступ к фотографиям для добавления изображений блюд и доступ к облачным сервисам для синхронизации данных. Эти разрешения используются только для функций приложения.",

    "ffd.privacy.h6": "6. Контакты",
    "ffd.privacy.p6": "Если у вас есть вопросы о политике конфиденциальности, свяжитесь с разработчиком:",

    "ffd.support.page.title": "Поддержка — Family Food Diary",
    "ffd.support.nav.title": "Поддержка",
    "ffd.support.back": "← Назад",

    "ffd.support.label": "Family Food Diary",
    "ffd.support.title": "Поддержка",
    "ffd.support.sub": "Ответы на часто задаваемые вопросы.",

    "ffd.support.q1": "Можно ли вести дневник для нескольких членов семьи?",
    "ffd.support.a1": "Да. Приложение позволяет хранить данные о питании нескольких членов семьи и быстро переключаться между ними.",

    "ffd.support.q2": "Где хранятся мои данные?",
    "ffd.support.a2": "Данные могут храниться локально на устройстве и в выбранном вами облачном хранилище — Google Drive или Яндекс Диске. Разработчик приложения не имеет доступа к вашим данным.",

    "ffd.support.q3": "Какие нутриенты поддерживаются?",
    "ffd.support.a3": "Помимо калорий, белков, жиров и углеводов приложение поддерживает витамины, минералы и другие показатели пищевой ценности продуктов.",

    "ffd.support.q4": "Можно ли посмотреть статистику по рациону?",
    "ffd.support.a4": "Да. Приложение показывает статистику питания, помогает отслеживать потребление нутриентов и находить продукты с наибольшим содержанием полезных веществ.",

    "ffd.support.contact.h": "Связаться с разработчиком",
    "ffd.support.contact.p": "Если вы столкнулись с проблемой или хотите предложить улучшение приложения, напишите мне.",
    "ffd.support.contact.btn": "Написать письмо",

    "ffd.tos.back": "← Назад",

    "ffd.tos.title": "Условия использования",
    "ffd.tos.updated": "Последнее обновление: 25 июня 2026 г.",

    "ffd.tos.s1.h": "1. Принятие условий",
    "ffd.tos.s1.p": "Используя приложение Family Food Diary, вы соглашаетесь с настоящими условиями использования. Если вы не согласны с ними, пожалуйста, не используйте приложение.",

    "ffd.tos.s2.h": "2. Описание сервиса",
    "ffd.tos.s2.p": "Family Food Diary — приложение для учёта питания, которое помогает вести дневник приёмов пищи, отслеживать нутриенты и анализировать рацион нескольких членов семьи.",

    "ffd.tos.s3.h": "3. Интеграция с облачными хранилищами",
    "ffd.tos.s3.p": "Приложение поддерживает резервное копирование и синхронизацию через Google Drive и Яндекс Диск. Доступ ограничен файлами, необходимыми для работы приложения. Разработчик не получает доступ к вашим данным и не передаёт их третьим лицам.",

    "ffd.tos.s4.h": "4. Пользовательские данные",
    "ffd.tos.s4.p": "Записи о питании, фотографии блюд, статистика и другие данные, созданные в приложении, принадлежат вам. Информация хранится локально на устройстве и/или в выбранном вами облачном хранилище.",

    "ffd.tos.s5.h": "5. Допустимое использование",
    "ffd.tos.s5.p": "Запрещается использовать приложение с нарушением законодательства, пытаться модифицировать его работу, обходить ограничения или выполнять обратную разработку.",

    "ffd.tos.s6.h": "6. Ограничение ответственности",
    "ffd.tos.s6.p": "Приложение предоставляется «как есть» без каких-либо гарантий. Разработчик не несёт ответственности за потерю данных, неточности в пищевой информации или любой ущерб, связанный с использованием приложения.",

    "ffd.tos.s7.h": "7. Изменение условий",
    "ffd.tos.s7.p": "Условия использования могут периодически обновляться. Продолжение использования приложения после публикации изменений означает согласие с новой редакцией условий.",

    "ffd.tos.s8.h": "8. Контакты",
    "ffd.tos.s8.p": "Если у вас есть вопросы относительно условий использования, свяжитесь с разработчиком через страницу поддержки.",

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
    "page.soon":        "Coming Soon to App Store",
    "soon":             "Coming Soon",

    "sc.cat":           "Food & Baking · iOS",
    "sc.desc":          "Smart sourdough baking companion. Live Activity and Dynamic Island timers, step-by-step recipes, notifications.",
    "sc.page.title":    "SourdoughCooker — Baking Assistant",
    "sc.page.sub":      "Sourdough baking assistant for iPhone. Track fermentation stages, manage timers, follow recipes and never miss an important step.",
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

    "sc.support.nav.title": "Support",
    "sc.support.page.title": "Support — SourdoughCooker",
    "sc.tos.s8.p": "Questions? Reach us via the <a href=\"support.html\">support page</a>.",
    "sc.support.back":      "← SourdoughCooker",
    "sc.support.label":    "Help",
    "sc.support.title":    "Support",
    "sc.support.sub":      "Answers to common questions about SourdoughCooker. If you can't find what you're looking for, reach out directly.",
    "sc.support.q1":       "The timer isn't showing on the Dynamic Island — what should I do?",
    "sc.support.a1":       "Make sure notifications are enabled in Settings → Notifications → SourdoughCooker. Live Activities only work on iPhone 14 Pro and later.",
    "sc.support.q2":       "Can I edit the timer duration?",
    "sc.support.a2":       "Yes! Tap the pencil icon next to the timer to set your own hours and minutes.",
    "sc.support.q3":       "The app doesn't send a notification when the timer ends",
    "sc.support.a3":       "Check that notifications are enabled for the app. If your phone is in Do Not Disturb mode, notifications may be suppressed by the system.",
    "sc.support.q4":       "Is my data safe?",
    "sc.support.a4":       "Absolutely. All data is stored only on your device. We collect no information about you.",
    "sc.support.contact.h":"Still need help?",
    "sc.support.contact.p":"Send me a message — I usually reply within 24 hours.",
    "sc.support.contact.btn":"Send an email",

    "sc.privacy.nav.title": "Privacy Policy",
    "sc.privacy.back":     "← SourdoughCooker",
    "sc.privacy.page.title": "Privacy Policy — SourdoughCooker",
    "sc.privacy.label":    "Legal",
    "sc.privacy.title":    "Privacy Policy",
    "sc.privacy.updated":  "Last updated: January 2024",
    "sc.privacy.h1":       "Data We Collect",
    "sc.privacy.p1":       "SourdoughCooker does not collect, store, or transmit any personal data. All data (recipes, timers, preferences) is stored locally on your device only.",
    "sc.privacy.h2":       "Notifications",
    "sc.privacy.p2":       "The app requests permission to send local notifications to remind you about timers. These notifications are generated locally and are not transmitted to any server.",
    "sc.privacy.h3":       "Analytics",
    "sc.privacy.p3":       "We do not use any third-party analytics services. No data about your in-app behaviour is tracked.",
    "sc.privacy.h4":       "Children",
    "sc.privacy.p4":       "The app is not directed at children under 13 and does not knowingly collect data from children.",
    "sc.privacy.h5":       "Changes to This Policy",
    "sc.privacy.p5":       "If the policy changes, the new version will be published on this page with an updated date.",
    "sc.privacy.h6":       "Contact",
    "sc.privacy.p6":       "For any privacy questions, please contact:",

    "sc.tos.title":  "Terms of Service",   
    "sc.tos.updated": "Last updated: June 25 2026",
    "sc.tos.back":     "← SourdoughCooker",

    "sc.tos.s1.h": "1. Acceptance",
    "sc.tos.s1.p": "By downloading or using SourdoughCooker, you agree to these Terms of Service. If you do not agree, please do not use the app.",

    "sc.tos.s2.h": "2. Description of Service",
    "sc.tos.s2.p": "SourdoughCooker is a baking assistant app for iPhone that helps you manage sourdough recipes, track fermentation timers, and follow step-by-step baking instructions.",

    "sc.tos.s3.h": "3. Google Drive Integration",
    "sc.tos.s3.p": "The app offers optional backup of your recipes to Google Drive. This requires you to sign in with your Google account. We request only the minimum necessary permissions (access to files created by this app). We do not access, store, or share any other files from your Google Drive. You may revoke access at any time via your Google account settings.",

    "sc.tos.s4.h": "4. User Content",
    "sc.tos.s4.p": "Recipes and baking data you create in the app belong to you. The app stores this data locally on your device. Cloud backup is optional and under your control.",

    "sc.tos.s5.h": "5. Prohibited Use",
    "sc.tos.s5.p": "You agree not to misuse the app, attempt to reverse-engineer it, or use it in any way that violates applicable laws.",

    "sc.tos.s6.h": "6. Disclaimer",
    "sc.tos.s6.p": "The app is provided \"as is\" without warranties of any kind. We are not responsible for any loss of data or damages arising from use of the app.",

    "sc.tos.s7.h": "7. Changes",
    "sc.tos.s7.p": "We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.",

    "sc.tos.s8.h": "8. Contact",
    "sc.tos.s8.p": "Questions? Reach us via the <a href=\"support.html\">support page</a>.",

    "ffd.cat": "Nutrition & Health",
    "ffd.desc": "Nutrition tracker for the whole family with calorie, vitamin, mineral and nutrient analysis.",

    "ffd.page.title": "Family Food Diary — Family Nutrition Tracker",

    "ffd.page.sub": "Track nutrition for the whole family. Monitor calories, macronutrients, iron, magnesium, vitamins and other essential nutrients.",

    "ffd.page.about.h": "Features",

    "ffd.page.about.p": "An easy way to keep nutrition records for your entire family and gain insights into eating habits.",

    "ffd.page.f1": "Track meals for multiple family members",
    "ffd.page.f2": "Monitor calories, protein, fat and carbohydrates",
    "ffd.page.f3": "Track iron, magnesium, calcium, vitamins and other nutrients",
    "ffd.page.f4": "Discover your top foods by nutrient content",
    "ffd.page.f5": "View nutrition history and statistics",

    "ffd.page.why.h": "Why Family Food Diary?",

    "ffd.page.why.f1": "Built for families — track nutrition for yourself, your children and loved ones",
    "ffd.page.why.f2": "More than calories — analyze dozens of vitamins and minerals",
    "ffd.page.why.f3": "Your data stays yours — stored in your Google Drive or Yandex Disk",

    "ffd.page.privacy.h": "Your Data",

    "ffd.page.privacy.p": "The app does not use its own cloud servers. You choose where your nutrition diary is stored: Google Drive or Yandex Disk.",

    "ffd.page.links.h": "Useful Links",
    "ffd.page.support": "Support",
    "ffd.page.privacy": "Privacy Policy",
    "ffd.page.terms": "Terms of Use",

    "ffd.privacy.page.title": "Privacy Policy — Family Food Diary",
    "ffd.privacy.nav.title": "Privacy Policy",
    "ffd.privacy.back": "← Back",
    "ffd.privacy.label": "Family Food Diary",
    "ffd.privacy.title": "Privacy Policy",
    "ffd.privacy.updated": "Last updated: June 25, 2026",

    "ffd.privacy.h1": "1. General",
    "ffd.privacy.p1": "Family Food Diary respects your privacy. The app is designed for nutrition tracking and does not collect personal information for sharing with third parties.",

    "ffd.privacy.h2": "2. Information Stored",
    "ffd.privacy.p2": "The app may store meal records, food items, meal photos, nutrition statistics and other information that you choose to enter.",

    "ffd.privacy.h3": "3. Data Storage",
    "ffd.privacy.p3": "Your data is stored locally on your device and/or in cloud storage selected by you (Google Drive or Yandex Disk). The developer does not have access to your data.",

    "ffd.privacy.h4": "4. Third-Party Sharing",
    "ffd.privacy.p4": "The app does not sell, share or provide your data to third parties. All information remains under your control.",

    "ffd.privacy.h5": "5. Permissions",
    "ffd.privacy.p5": "The app may request access to photos for attaching meal images and access to cloud storage services for synchronization. These permissions are used only to provide app functionality.",

    "ffd.privacy.h6": "6. Contact",
    "ffd.privacy.p6": "If you have any questions regarding this Privacy Policy, please contact:",

    "ffd.support.page.title": "Support — Family Food Diary",
    "ffd.support.nav.title": "Support",
    "ffd.support.back": "← Back",

    "ffd.support.label": "Family Food Diary",
    "ffd.support.title": "Support",
    "ffd.support.sub": "Frequently asked questions.",

    "ffd.support.q1": "Can I track nutrition for multiple family members?",
    "ffd.support.a1": "Yes. The app allows you to keep nutrition records for multiple family members and quickly switch between them.",

    "ffd.support.q2": "Where is my data stored?",
    "ffd.support.a2": "Your data can be stored locally on your device and in cloud storage selected by you, such as Google Drive or Yandex Disk. The developer does not have access to your data.",

    "ffd.support.q3": "Which nutrients are supported?",
    "ffd.support.a3": "In addition to calories, protein, fat and carbohydrates, the app supports vitamins, minerals and many other nutritional values.",

    "ffd.support.q4": "Can I view nutrition statistics?",
    "ffd.support.a4": "Yes. The app provides nutrition statistics, helps you track nutrient intake and identify foods that contribute the most beneficial nutrients to your diet.",

    "ffd.support.contact.h": "Contact the Developer",
    "ffd.support.contact.p": "If you have a question, found a bug, or would like to suggest an improvement, feel free to contact me.",
    "ffd.support.contact.btn": "Send Email",

    "ffd.tos.back": "← Back",

    "ffd.tos.title": "Terms of Service",
    "ffd.tos.updated": "Last updated: June 25 2026",

    "ffd.tos.s1.h": "1. Acceptance",
    "ffd.tos.s1.p": "By downloading or using Family Food Diary, you agree to these Terms of Service. If you do not agree, please do not use the app.",

    "ffd.tos.s2.h": "2. Description of Service",
    "ffd.tos.s2.p": "Family Food Diary is a nutrition tracking application that helps users record meals, monitor nutrient intake, and analyze nutrition statistics for multiple family members.",

    "ffd.tos.s3.h": "3. Cloud Storage Integration",
    "ffd.tos.s3.p": "The app offers optional synchronization and backup through cloud storage services such as Google Drive and Yandex Disk. Access is limited to files required by the app. The developer does not access, store, or share your cloud files.",

    "ffd.tos.s4.h": "4. User Data",
    "ffd.tos.s4.p": "Nutrition records, meal photos, statistics, and other content created in the app belong to you. The app stores this information locally on your device and/or in cloud storage chosen by you.",

    "ffd.tos.s5.h": "5. Acceptable Use",
    "ffd.tos.s5.p": "You agree not to misuse the app, attempt to reverse-engineer it, interfere with its operation, or use it in violation of applicable laws.",

    "ffd.tos.s6.h": "6. Disclaimer",
    "ffd.tos.s6.p": "The app is provided \"as is\" without warranties of any kind. The developer is not responsible for data loss, inaccurate nutritional information, or damages arising from use of the app.",

    "ffd.tos.s7.h": "7. Changes to Terms",
    "ffd.tos.s7.p": "These Terms may be updated from time to time. Continued use of the app after changes become effective constitutes acceptance of the updated Terms.",

    "ffd.tos.s8.h": "8. Contact",
    "ffd.tos.s8.p": "If you have questions regarding these Terms, please contact the developer through the support page.",
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