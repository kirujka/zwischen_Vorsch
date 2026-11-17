// Vorträge 1A · ПРОМЕЖУТОЧНЫЙ ВАРИАНТ 17.11.2026 — ужимаем, НЕ УТВЕРЖДЁН.
// Утверждённый оригинал — приложение Vorträge 1A (корень репозитория) и файл Texte_8_Aktuell.
// n: true — новое предложение (к корректору); b — общие блоки; r — рамка.

var STAND = '17.11.2026';
var BLOECKE = [
 {
  "id": 8,
  "titel": "Брат — гражданский инженер",
  "themen": [
   3,
   4,
   5,
   6,
   7
  ],
  "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
  "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ."
 },
 {
  "id": 9,
  "titel": "Хочу работать в этой отрасли",
  "themen": [
   3,
   4,
   5,
   6,
   7
  ],
  "de": "Auch ich möchte in dieser Branche arbeiten.",
  "ru": "Я тоже хочу работать в этой отрасли.",
  "hinweis": "В темах 1 и 2 эта мысль встроена в блок Б1: «… und in dem auch ich arbeiten möchte».",
  "formen": [
   [
    3,
    "Auch ich möchte in dieser Branche arbeiten und lerne gezielt dafür."
   ]
  ]
 },
 {
  "id": 10,
  "titel": "Отказ брата",
  "themen": [
   3,
   4,
   5
  ],
  "de": "{Nach der Universität} bat ich ihn um eine Stelle, doch er lehnte ab: Ohne Erfahrung kommt niemand in sein Team — nicht einmal sein eigener Bruder.",
  "ru": "{После университета} я попросил у него место, но он отказал: без опыта в его команду не попадает никто — даже собственный брат.",
  "hinweis": "«Nach der Universität» — только в теме 4."
 },
 {
  "id": 1,
  "titel": "Фирма брата + «и я хочу»",
  "themen": [
   1,
   2
  ],
  "de": "Es ist ein IT-Unternehmen, in dem mein älterer Bruder {Alex} ein Team leitet — und in dem auch ich arbeiten möchte.",
  "ru": "Это IT-фирма, в которой мой старший брат {Алекс} руководит командой — и в которой хочу работать и я.",
  "hinweis": "Имя Alex — только в теме 2."
 },
 {
  "id": 2,
  "titel": "Фирма: война и продукты",
  "themen": [
   1,
   2
  ],
  "de": "Seit Kriegsbeginn entwickelt die Firma KI-Produkte für Verteidigung und Sicherheit.",
  "ru": "С начала войны фирма разрабатывает ИИ-продукты для обороны и безопасности."
 },
 {
  "id": 3,
  "titel": "Особенность: сроки и секретность",
  "themen": [
   1,
   2
  ],
  "de": "Die Besonderheit: enge Fristen und strenge Geheimhaltung — deshalb landet man dort nicht zufällig.",
  "ru": "Особенность: жёсткие сроки и строгая секретность — поэтому случайно туда не попадают."
 },
 {
  "id": 4,
  "titel": "Коллектив",
  "themen": [
   1,
   2
  ],
  "de": "Was ein solches Unternehmen wirklich auszeichnet, ist das Team: Menschen, die für ihre Sache brennen und ein gemeinsames Ziel verfolgen.",
  "ru": "Что по-настоящему отличает такую фирму — это коллектив: люди, увлечённые своим делом и объединённые общей целью."
 },
 {
  "id": 5,
  "titel": "Коллеги держат уровень",
  "themen": [
   1,
   2
  ],
  "de": "Von solchen Kollegen lernt man ständig dazu, und sie halten einen auf hohem und passendem Niveau: Wer zurückfällt, wird schnell uninteressant — fachlich wie menschlich.",
  "ru": "У таких коллег постоянно учишься, и они держат тебя на высоком и подходящем уровне: кто отстаёт, быстро становится неинтересен — и как специалист, и как человек."
 },
 {
  "id": 6,
  "titel": "Пять лет техником",
  "themen": [
   1,
   2
  ],
  "de": "Nach fünf Jahren als IT-Techniker kenne ich den Unterschied: In so einem Team geht man mit Interesse zur Arbeit und zählt nicht die Stunden bis zum Feierabend.",
  "ru": "После пяти лет IT-техником я знаю разницу: в такой команде на работу идёшь с интересом и не считаешь часы до конца рабочего дня."
 },
 {
  "id": 7,
  "titel": "Три преимущества",
  "themen": [
   1,
   2
  ],
  "de": "Hinzu kommen drei Vorteile, die für mich eine wichtige Rolle spielen: Die Bezahlung stimmt, man kann aufsteigen, und der Arbeitsplatz ist sicher, weil die Branche wächst und noch lange Fachleute braucht.",
  "ru": "К этому добавляются три преимущества, которые для меня важны: с оплатой всё в порядке, можно расти, и место надёжное, потому что отрасль растёт и ещё долго будет нуждаться в специалистах."
 },
 {
  "id": 11,
  "titel": "Шок и обида",
  "themen": [
   3,
   4
  ],
  "de": "{Damals} war ich schockiert und beleidigt, …",
  "ru": "{Тогда} я был шокирован и обижен, …",
  "formen": [
   [
    3,
    "Ich war schockiert und beleidigt, fand aber bald selbst eine Stelle — als einfacher Techniker in einer IT-Firma."
   ],
   [
    4,
    "Damals war ich schockiert und beleidigt, heute weiß ich, dass er recht hatte."
   ]
  ]
 },
 {
  "id": 12,
  "titel": "Документы",
  "themen": [
   5,
   6
  ],
  "de": "{Auch} bei den Unterlagen zeigt sich eine Besonderheit unseres Arbeitsmarktes: Lebenslauf und Diplom reichen nicht, man verlangt zusätzlich das Arbeitsbuch, ein Führungszeugnis, den Wehrpass und Empfehlungsschreiben. Soweit ich weiß, wird das in Deutschland für dieselbe Stelle nicht verlangt.",
  "ru": "{И} в документах видна особенность нашего рынка труда: резюме и диплома мало, дополнительно требуют трудовую книжку, справку о несудимости, военный билет и рекомендательные письма. Насколько я знаю, в Германии на такую же должность этого не требуют.",
  "hinweis": "«Auch» — только в теме 6."
 },
 {
  "id": 13,
  "titel": "Подготовка и вопросы",
  "themen": [
   5,
   6
  ],
  "de": "[Im Gespräch selbst entscheidet nicht die Bewerbungsmappe, sondern die Vorbereitung | Am wichtigsten ist die Vorbereitung]: Ich informiere mich vorher über die Firma und ihre Kunden. Die Fragen sind fast immer dieselben: Warum gerade wir? Welche Erfahrungen bringen Sie mit?",
  "ru": "[На самом собеседовании решает не папка с документами, а подготовка | Важнее всего подготовка]: я заранее узнаю о фирме и её клиентах. Вопросы почти всегда одни и те же: почему именно мы? какой у вас опыт?",
  "hinweis": "Первый вариант в скобках — тема 5, второй — тема 6. В теме 6 между подготовкой и вопросами стоит фраза про одежду."
 },
 {
  "id": 14,
  "titel": "Профиль не подошёл",
  "themen": [
   5,
   6
  ],
  "de": "Ausschlaggebend ist am Ende aber, ob das eigene Profil zur Stelle passt. Server und Cloud-Systeme beherrsche ich, aber gesucht war jemand, der auch programmieren kann — die Stelle habe ich damals nicht bekommen. Inzwischen kann ich programmieren und beherrsche Java.",
  "ru": "Но решающее в итоге — подходит ли собственный профиль под вакансию. Серверы и облачные системы я знаю уверенно, но искали человека, который ещё и программирует, — тогда меня не взяли. Сейчас я умею программировать и владею Java."
 },
 {
  "id": 15,
  "titel": "Вывод тем 5 и 6",
  "themen": [
   5,
   6
  ],
  "de": "Zusammenfassend kann ich sagen: Auf das Gespräch kann man sich vorbereiten, auf fehlende Erfahrung nicht.",
  "ru": "Подводя итог: подготовиться можно к разговору, но не к опыту, которого нет."
 },
 {
  "id": 16,
  "titel": "Мигрантам и пожилым тяжело",
  "themen": [
   7,
   8
  ],
  "de": "Vielen Migranten und älteren Menschen fällt der Umgang mit [Behörden | der Technik] schwer.",
  "ru": "Многим мигрантам и пожилым людям тяжело даётся [общение с ведомствами | обращение с техникой].",
  "hinweis": "Behörden — тема 7, der Technik — тема 8 (там дальше: «…, und sie sind bereit, dafür zu zahlen»)."
 }
];

var RAHMEN = [
 {
  "id": "R1",
  "themen": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8
  ],
  "de": "Zusammenfassend: … / Zusammenfassend kann ich sagen, dass …",
  "ru": "Подводя итог: … / Подводя итог, могу сказать, что …"
 },
 {
  "id": "R2",
  "themen": [
   3,
   5,
   6
  ],
  "de": "Ausschlaggebend ist {am Ende} aber {etwas anderes}: …",
  "ru": "Но решающее {в итоге} — {другое}: …"
 },
 {
  "id": "R3",
  "themen": [
   1,
   2,
   7,
   8
  ],
  "de": "Ein wesentlicher Vorteil {dieser Geschäftsidee} ist, dass … / Hinzu kommen drei Vorteile, …",
  "ru": "Существенное преимущество {этой бизнес-идеи} в том, что … / К этому добавляются три преимущества, …"
 },
 {
  "id": "R4",
  "themen": [
   1,
   2,
   8
  ],
  "de": "Die Besonderheit: … / Das Besondere: …",
  "ru": "Особенность: …"
 },
 {
  "id": "R5",
  "themen": [
   1,
   7
  ],
  "de": "Ich möchte Ihnen … vorstellen, …",
  "ru": "Я хочу представить вам …"
 }
];

var THEMEN = [
 {
  "nr": 1,
  "name": "ARBEITGEBER",
  "kurz": "Работодатель",
  "war": 245,
  "auf_de": "Beschreiben Sie einen Arbeitgeber, für den Sie gearbeitet haben oder arbeiten möchten (z. B. Branche, Produkte und Dienstleistungen, Abteilungen und ihre Aufgaben, Besonderheiten).",
  "auf_ru": "Опишите работодателя, у которого вы работали или хотели бы работать (напр.: отрасль, продукты и услуги, отделы и их задачи, особенности).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Arbeitgeber“ gewählt.",
     "ru": "Я выбрал тему «Работодатель»."
    }
   ],
   [
    {
     "de": "Ich möchte Ihnen einen Arbeitgeber vorstellen, bei dem ich noch nie gearbeitet habe — und den ich trotzdem gut kenne.",
     "ru": "Я хочу представить вам работодателя, у которого я никогда не работал — и которого всё равно хорошо знаю.",
     "r": "R5"
    },
    {
     "de": "Es ist ein IT-Unternehmen, in dem mein älterer Bruder ein Team leitet — und in dem auch ich arbeiten möchte.",
     "ru": "Это IT-фирма, в которой мой старший брат руководит командой — и в которой хочу работать и я.",
     "b": [
      1
     ],
     "n": true
    },
    {
     "de": "Seit Kriegsbeginn entwickelt die Firma KI-Produkte für Verteidigung und Sicherheit.",
     "ru": "С начала войны фирма разрабатывает ИИ-продукты для обороны и безопасности.",
     "b": [
      2
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Die Arbeit ist auf drei Abteilungen verteilt: Entwicklung, Tests und Einführung beim Kunden.",
     "ru": "Работа распределена между тремя отделами: разработка, тестирование и внедрение у заказчика."
    },
    {
     "de": "Die Besonderheit: enge Fristen und strenge Geheimhaltung — deshalb landet man dort nicht zufällig.",
     "ru": "Особенность: жёсткие сроки и строгая секретность — поэтому случайно туда не попадают.",
     "b": [
      3
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Was ein solches Unternehmen wirklich auszeichnet, ist das Team: Menschen, die für ihre Sache brennen und ein gemeinsames Ziel verfolgen.",
     "ru": "Что по-настоящему отличает такую фирму — это коллектив: люди, увлечённые своим делом и объединённые общей целью.",
     "b": [
      4
     ]
    },
    {
     "de": "Von solchen Kollegen lernt man ständig dazu, und sie halten einen auf hohem und passendem Niveau: Wer zurückfällt, wird schnell uninteressant — fachlich wie menschlich.",
     "ru": "У таких коллег постоянно учишься, и они держат тебя на высоком и подходящем уровне: кто отстаёт, быстро становится неинтересен — и как специалист, и как человек.",
     "b": [
      5
     ]
    },
    {
     "de": "Nach fünf Jahren als IT-Techniker kenne ich den Unterschied: In so einem Team geht man mit Interesse zur Arbeit und zählt nicht die Stunden bis zum Feierabend.",
     "ru": "После пяти лет IT-техником я знаю разницу: в такой команде на работу идёшь с интересом и не считаешь часы до конца рабочего дня.",
     "b": [
      6
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Hinzu kommen drei Vorteile, die für mich eine wichtige Rolle spielen: Die Bezahlung stimmt, man kann aufsteigen, und der Arbeitsplatz ist sicher, weil die Branche wächst und noch lange Fachleute braucht.",
     "ru": "К этому добавляются три преимущества, которые для меня важны: с оплатой всё в порядке, можно расти, и место надёжное, потому что отрасль растёт и ещё долго будет нуждаться в специалистах.",
     "b": [
      7
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Zusammenfassend: Ich suche einen Arbeitgeber, bei dem nicht nur Gehalt und Aufstiegschancen zählen, sondern auch das Team hoch motiviert ist.",
     "ru": "Подводя итог: я ищу работодателя, у которого важны не только зарплата и перспективы роста, но и высоко мотивированная команда.",
     "r": "R1"
    },
    {
     "de": "Dort würde ich gerne bis zur Rente arbeiten.",
     "ru": "Там я с радостью работал бы до самой пенсии."
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt",
    "ru": "выбрал тему"
   },
   {
    "de": "nie gearbeitet — gut kenne · Bruder · auch ich · seit Kriegsbeginn",
    "ru": "не работал — знаю · брат · и я хочу · с начала войны"
   },
   {
    "de": "drei Abteilungen · Besonderheit: Fristen, Geheimhaltung",
    "ru": "три отдела · особенность: сроки, секретность"
   },
   {
    "de": "Team · brennen · Niveau · fünf Jahre · Feierabend",
    "ru": "коллектив · горят · уровень · пять лет · конец дня"
   },
   {
    "de": "drei Vorteile: Bezahlung · aufsteigen · sicher",
    "ru": "три плюса: оплата · рост · надёжность"
   },
   {
    "de": "Fazit: Gehalt + Team · bis zur Rente",
    "ru": "вывод: зарплата + команда · до пенсии"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 2,
  "name": "ARBEITSUMFELD",
  "kurz": "Рабочая среда",
  "war": 244,
  "auf_de": "Beschreiben Sie, wie Sie sich ein gutes Arbeitsumfeld vorstellen (z. B. Jobsicherheit, Lohn/Gehalt, Karrierechancen, Kommunikation in der Firma, Beispiele aus Ihrer Berufserfahrung).",
  "auf_ru": "Опишите, каким вы представляете себе хорошую рабочую среду (напр.: надёжность места, зарплата, карьерные возможности, коммуникация в фирме, примеры из вашего опыта).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Arbeitsumfeld“ gewählt.",
     "ru": "Я выбрал тему «Рабочая среда»."
    }
   ],
   [
    {
     "de": "Ein gutes Arbeitsumfeld kann ich am besten an einem konkreten Beispiel beschreiben.",
     "ru": "Хорошую рабочую среду я лучше всего опишу на конкретном примере."
    },
    {
     "de": "Es ist ein IT-Unternehmen, in dem mein älterer Bruder Alex ein Team leitet — und in dem auch ich arbeiten möchte.",
     "ru": "Это IT-фирма, в которой мой старший брат Алекс руководит командой — и в которой хочу работать и я.",
     "b": [
      1
     ],
     "n": true
    },
    {
     "de": "Seit Kriegsbeginn entwickelt die Firma KI-Produkte für Verteidigung und Sicherheit.",
     "ru": "С начала войны фирма разрабатывает ИИ-продукты для обороны и безопасности.",
     "b": [
      2
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Die Besonderheit: enge Fristen und strenge Geheimhaltung — deshalb landet man dort nicht zufällig.",
     "ru": "Особенность: жёсткие сроки и строгая секретность — поэтому случайно туда не попадают.",
     "b": [
      3
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Was ein solches Unternehmen wirklich auszeichnet, ist das Team: Menschen, die für ihre Sache brennen und ein gemeinsames Ziel verfolgen.",
     "ru": "Что по-настоящему отличает такую фирму — это коллектив: люди, увлечённые своим делом и объединённые общей целью.",
     "b": [
      4
     ]
    },
    {
     "de": "Von solchen Kollegen lernt man ständig dazu, und sie halten einen auf hohem und passendem Niveau: Wer zurückfällt, wird schnell uninteressant — fachlich wie menschlich.",
     "ru": "У таких коллег постоянно учишься, и они держат тебя на высоком и подходящем уровне: кто отстаёт, быстро становится неинтересен — и как специалист, и как человек.",
     "b": [
      5
     ]
    },
    {
     "de": "Nach fünf Jahren als IT-Techniker kenne ich den Unterschied: In so einem Team geht man mit Interesse zur Arbeit und zählt nicht die Stunden bis zum Feierabend.",
     "ru": "После пяти лет IT-техником я знаю разницу: в такой команде на работу идёшь с интересом и не считаешь часы до конца рабочего дня.",
     "b": [
      6
     ],
     "n": true
    },
    {
     "de": "Bei uns wurden Fehler besprochen und nicht bestraft — genau das ist für mich offene Kommunikation.",
     "ru": "У нас ошибки разбирали, а не наказывали за них — вот что для меня и есть открытая коммуникация."
    }
   ],
   [
    {
     "de": "Hinzu kommen drei Vorteile, die für mich eine wichtige Rolle spielen: Die Bezahlung stimmt, man kann aufsteigen, und der Arbeitsplatz ist sicher, weil die Branche wächst und noch lange Fachleute braucht.",
     "ru": "К этому добавляются три преимущества, которые для меня важны: с оплатой всё в порядке, можно расти, и место надёжное, потому что отрасль растёт и ещё долго будет нуждаться в специалистах.",
     "b": [
      7
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Zusammenfassend: Ein gutes Arbeitsumfeld ist für mich eines, in dem nicht nur Gehalt und Aufstiegschancen zählen, sondern auch das Team hoch motiviert ist.",
     "ru": "Подводя итог: хорошая рабочая среда для меня — та, где важны не только зарплата и перспективы роста, но и высоко мотивированная команда.",
     "r": "R1"
    },
    {
     "de": "Dort würde ich gerne bis zur Rente arbeiten.",
     "ru": "Там я с радостью работал бы до самой пенсии."
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt",
    "ru": "выбрал тему"
   },
   {
    "de": "konkretes Beispiel · Bruder Alex · auch ich · seit Kriegsbeginn",
    "ru": "конкретный пример · брат Алекс · и я хочу · с начала войны"
   },
   {
    "de": "Besonderheit: Fristen, Geheimhaltung",
    "ru": "особенность: сроки, секретность"
   },
   {
    "de": "Team · Niveau · fünf Jahre · Fehler besprochen",
    "ru": "коллектив · уровень · пять лет · ошибки разбирали"
   },
   {
    "de": "drei Vorteile: Bezahlung · aufsteigen · sicher",
    "ru": "три плюса: оплата · рост · надёжность"
   },
   {
    "de": "Fazit: Gehalt + Team · bis zur Rente",
    "ru": "вывод: зарплата + команда · до пенсии"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 3,
  "name": "BERUFSWAHL",
  "kurz": "Выбор профессии",
  "war": 221,
  "auf_de": "Beschreiben Sie Ereignisse und Erfahrungen, die Ihre Berufswahl beeinflusst haben (z. B. Stationen, wichtige Personen, Motivation, Folgen).",
  "auf_ru": "Опишите события и опыт, которые повлияли на выбор вашей профессии (напр.: этапы, важные люди, мотивация, последствия).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Berufswahl“ gewählt.",
     "ru": "Я выбрал тему «Выбор профессии»."
    },
    {
     "de": "Meinen Beruf habe ich nicht ausgesucht — zwei Ereignisse haben ihn für mich ausgesucht: eine Absage und der Krieg.",
     "ru": "Профессию я не выбирал — два события выбрали её за меня: один отказ и война.",
     "n": true
    }
   ],
   [
    {
     "de": "Nach der Universität war ich sicher, schnell eine Stelle zu finden.",
     "ru": "После университета я был уверен, что быстро найду работу."
    },
    {
     "de": "Mein älterer Bruder leitete schon ein IT-Team.",
     "ru": "Мой старший брат уже руководил IT-командой."
    },
    {
     "de": "Ich bat ihn um eine Stelle, doch er lehnte ab: Ohne Erfahrung kommt niemand in sein Team — nicht einmal sein eigener Bruder.",
     "ru": "Я попросил у него место, но он отказал: без опыта в его команду не попадает никто — даже собственный брат.",
     "b": [
      10
     ]
    },
    {
     "de": "Ich war schockiert und beleidigt, fand aber bald selbst eine Stelle — als einfacher Techniker in einer IT-Firma.",
     "ru": "Я был шокирован и обижен, но вскоре сам нашёл работу — простым техником в IT-фирме.",
     "b": [
      11
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Nach 2014, als Russland den Krieg gegen die Ukraine begann, gingen viele unserer IT-Leute in die Verteidigungsindustrie.",
     "ru": "После 2014 года, когда Россия начала войну против Украины, многие наши айтишники ушли в оборонную промышленность."
    },
    {
     "de": "Dass mein Bruder auch dazugehört, erfuhr ich erst 2020.",
     "ru": "Что мой брат тоже среди них, я узнал только в 2020-м."
    },
    {
     "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
     "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ.",
     "b": [
      8
     ],
     "n": true
    },
    {
     "de": "Vorher durfte er wegen der Geheimhaltung nicht darüber sprechen.",
     "ru": "Раньше из-за секретности он не мог об этом говорить."
    },
    {
     "de": "Diese Nachricht hat mich überrascht und stark motiviert.",
     "ru": "Эта новость меня удивила и сильно мотивировала."
    },
    {
     "de": "Da verstand ich, warum er mir gegenüber so deutlich gesprochen hatte.",
     "ru": "Тогда я понял, почему он говорил со мной так прямо."
    }
   ],
   [
    {
     "de": "Die Branche wächst ständig, Fachleute werden immer gebraucht, und die Bezahlung stimmt.",
     "ru": "Отрасль постоянно растёт, специалисты нужны всегда, и с оплатой всё в порядке."
    },
    {
     "de": "Ausschlaggebend ist aber etwas anderes: Diese Arbeit schützt Menschen.",
     "ru": "Но решающее — другое: эта работа защищает людей.",
     "r": "R2"
    },
    {
     "de": "Auch ich möchte in dieser Branche arbeiten und lerne gezielt dafür.",
     "ru": "Я тоже хочу работать в этой отрасли и целенаправленно для этого учусь.",
     "b": [
      9
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Zusammenfassend: Den größten Einfluss auf meine Berufswahl hatte mein Bruder — und diese Branche bleibt für mich die attraktivste.",
     "ru": "Подводя итог: сильнее всего на мой выбор профессии повлиял брат — и эта отрасль остаётся для меня самой привлекательной.",
     "r": "R1"
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt · Absage und Krieg",
    "ru": "выбрал тему · отказ и война"
   },
   {
    "de": "Universität · Bruder · Absage · schockiert, beleidigt · Techniker",
    "ru": "университет · брат · отказ · шок, обида · техник"
   },
   {
    "de": "2014 Krieg · 2020 erfahren · Ingenieur · Geheimhaltung · deutlich",
    "ru": "2014 война · 2020 узнал · инженер · секретность · прямо"
   },
   {
    "de": "Branche wächst · schützt Menschen · auch ich",
    "ru": "отрасль растёт · защищает людей · и я хочу"
   },
   {
    "de": "Fazit: Bruder · attraktivste Branche",
    "ru": "вывод: брат · самая привлекательная отрасль"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 4,
  "name": "BERUFLICHES VORBILD",
  "kurz": "Пример для подражания",
  "war": 230,
  "auf_de": "Beschreiben Sie eine Person aus Ihrem Umfeld, die für Sie ein berufliches Vorbild ist (z. B. Beziehung zu dieser Person, Eigenschaften, Einfluss auf Sie).",
  "auf_ru": "Опишите человека из вашего окружения, который является для вас профессиональным примером (напр.: ваши отношения с ним, его качества, его влияние на вас).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „berufliches Vorbild“ gewählt.",
     "ru": "Я выбрал тему «Профессиональный пример для подражания»."
    }
   ],
   [
    {
     "de": "Mein berufliches Vorbild ist mein älterer Bruder Alex — und was er tut, ist heute wichtiger für die Ukraine als je zuvor.",
     "ru": "Мой профессиональный пример — мой старший брат Алекс, и то, что он делает, сегодня важнее для Украины, чем когда-либо."
    },
    {
     "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
     "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ.",
     "b": [
      8
     ],
     "n": true
    },
    {
     "de": "Dort landet man nicht zufällig.",
     "ru": "Случайно туда не попадают."
    },
    {
     "de": "Auch ich möchte in dieser Branche arbeiten.",
     "ru": "Я тоже хочу работать в этой отрасли.",
     "b": [
      9
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Zwei Eigenschaften zeichnen ihn besonders aus: seine Konsequenz und seine strukturierte Arbeitsweise.",
     "ru": "Особенно его отличают два качества: принципиальность и системность в работе."
    },
    {
     "de": "Seine Konsequenz habe ich selbst erlebt.",
     "ru": "Его принципиальность я испытал на себе.",
     "n": true
    },
    {
     "de": "Nach der Universität bat ich ihn um eine Stelle, doch er lehnte ab: Ohne Erfahrung kommt niemand in sein Team — nicht einmal sein eigener Bruder.",
     "ru": "После университета я попросил у него место, но он отказал: без опыта в его команду не попадает никто — даже собственный брат.",
     "b": [
      10
     ]
    },
    {
     "de": "Damals war ich schockiert und beleidigt, heute weiß ich, dass er recht hatte.",
     "ru": "Тогда я был шокирован и обижен, сейчас знаю, что он был прав.",
     "b": [
      11
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Seine strukturierte Arbeitsweise sieht man besonders unter Druck: Er verliert nie den Überblick, zerlegt jede Aufgabe in kleine Schritte und kommt so zum Ergebnis.",
     "ru": "Его системность особенно видна под давлением: он никогда не теряет общую картину, разбивает любую задачу на маленькие шаги и так приходит к результату.",
     "n": true
    },
    {
     "de": "Seinen Ansatz habe ich übernommen: Schwieriges teile ich sofort in kleine Brocken auf.",
     "ru": "Я перенял его подход: сложное я сразу делю на маленькие куски."
    },
    {
     "de": "Und wenn ich trotzdem nicht weiterkomme, rufe ich ihn an — er hilft mir, einen Ausweg zu finden.",
     "ru": "А если всё равно не продвигаюсь — звоню ему, и он помогает найти выход."
    }
   ],
   [
    {
     "de": "Zusammenfassend: Mein Bruder ist mein Vorbild, denn er hat als einfacher Techniker angefangen und leitet heute unter äußerst schwierigen Bedingungen ein großes Team.",
     "ru": "Подводя итог: брат — мой пример для подражания, ведь он начинал простым техником, а сегодня в крайне тяжёлых условиях руководит большой командой.",
     "r": "R1",
     "n": true
    },
    {
     "de": "Ich bin stolz auf ihn: Er hat mir viel beigebracht, und ich versuche, in seine Fußstapfen zu treten.",
     "ru": "Я горжусь им: он многому меня научил, и я стараюсь идти по его стопам.",
     "n": true
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt",
    "ru": "выбрал тему"
   },
   {
    "de": "Bruder Alex · wichtiger als je zuvor · Ingenieur · nicht zufällig · auch ich",
    "ru": "брат Алекс · важнее, чем когда-либо · инженер · не случайно · и я хочу"
   },
   {
    "de": "zwei Eigenschaften · Konsequenz erlebt · Absage · recht hatte",
    "ru": "два качества · принципиальность на себе · отказ · был прав"
   },
   {
    "de": "unter Druck · Schritte · Brocken · anrufen",
    "ru": "под давлением · шаги · куски · звоню"
   },
   {
    "de": "Fazit: Techniker → großes Team · stolz · Fußstapfen",
    "ru": "вывод: техник → большая команда · горжусь · по стопам"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 5,
  "name": "ARBEITSSUCHE",
  "kurz": "Поиск работы",
  "war": 253,
  "auf_de": "Beschreiben Sie das Vorgehen bei der Arbeitssuche für ein Land Ihrer Wahl (z. B. Angebote finden, Erstkontakt, Bewerbungsunterlagen oder -gespräch).",
  "auf_ru": "Опишите порядок действий при поиске работы в стране на ваш выбор (напр.: как находят вакансии, первый контакт, документы или собеседование).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Arbeitssuche“ gewählt.",
     "ru": "Я выбрал тему «Поиск работы»."
    },
    {
     "de": "Wie man in der ukrainischen IT eine Stelle sucht, weiß ich nicht aus Ratgebern, sondern aus zwei Monaten Praxis.",
     "ru": "Как ищут работу в украинском IT, я знаю не из советов, а из двух месяцев практики."
    }
   ],
   [
    {
     "de": "Gesucht wird auf zwei Wegen: über Fachportale wie DOU, Work.ua und Jinni — oder über Bekannte.",
     "ru": "Ищут двумя путями: через профильные порталы — DOU, Work.ua и Jinni — или через знакомых."
    },
    {
     "de": "Diese Möglichkeit hatte ich auch: Mein älterer Bruder leitet ein IT-Team.",
     "ru": "Такая возможность была и у меня: мой старший брат руководит IT-командой."
    },
    {
     "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
     "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ.",
     "b": [
      8
     ],
     "n": true
    },
    {
     "de": "Auch ich möchte in dieser Branche arbeiten.",
     "ru": "Я тоже хочу работать в этой отрасли.",
     "b": [
      9
     ],
     "n": true
    },
    {
     "de": "Ich bat ihn um eine Stelle, doch er lehnte ab: Ohne Erfahrung kommt niemand in sein Team — nicht einmal sein eigener Bruder.",
     "ru": "Я попросил у него место, но он отказал: без опыта в его команду не попадает никто — даже собственный брат.",
     "b": [
      10
     ]
    },
    {
     "de": "Ich habe mich dann selbst woanders beworben: etwa vierzig Bewerbungen und zwei Einladungen zum Vorstellungsgespräch.",
     "ru": "Тогда я сам откликался в другие места: около сорока откликов и два приглашения на собеседование."
    }
   ],
   [
    {
     "de": "Bei den Unterlagen zeigt sich eine Besonderheit unseres Arbeitsmarktes: Lebenslauf und Diplom reichen nicht, man verlangt zusätzlich das Arbeitsbuch, ein Führungszeugnis, den Wehrpass und Empfehlungsschreiben.",
     "ru": "В документах видна особенность нашего рынка труда: резюме и диплома мало, дополнительно требуют трудовую книжку, справку о несудимости, военный билет и рекомендательные письма.",
     "b": [
      12
     ],
     "n": true
    },
    {
     "de": "Soweit ich weiß, wird das in Deutschland für dieselbe Stelle nicht verlangt.",
     "ru": "Насколько я знаю, в Германии на такую же должность этого не требуют.",
     "b": [
      12
     ]
    }
   ],
   [
    {
     "de": "Im Gespräch selbst entscheidet nicht die Bewerbungsmappe, sondern die Vorbereitung: Ich informiere mich vorher über die Firma und ihre Kunden.",
     "ru": "На самом собеседовании решает не папка с документами, а подготовка: я заранее узнаю о фирме и её клиентах.",
     "b": [
      13
     ]
    },
    {
     "de": "Die Fragen sind fast immer dieselben: Warum gerade wir? Welche Erfahrungen bringen Sie mit?",
     "ru": "Вопросы почти всегда одни и те же: почему именно мы? какой у вас опыт?",
     "b": [
      13
     ]
    }
   ],
   [
    {
     "de": "Ausschlaggebend ist am Ende aber, ob das eigene Profil zur Stelle passt.",
     "ru": "Но решающее в итоге — подходит ли собственный профиль под вакансию.",
     "b": [
      14
     ]
    },
    {
     "de": "Server und Cloud-Systeme beherrsche ich, aber gesucht war jemand, der auch programmieren kann — die Stelle habe ich damals nicht bekommen.",
     "ru": "Серверы и облачные системы я знаю уверенно, но искали человека, который ещё и программирует, — тогда меня не взяли.",
     "b": [
      14
     ],
     "n": true
    },
    {
     "de": "Inzwischen kann ich programmieren und beherrsche Java.",
     "ru": "Сейчас я умею программировать и владею Java.",
     "b": [
      14
     ]
    },
    {
     "de": "Zusammenfassend kann ich sagen: Auf das Gespräch kann man sich vorbereiten, auf fehlende Erfahrung nicht.",
     "ru": "Подводя итог: подготовиться можно к разговору, но не к опыту, которого нет.",
     "b": [
      15
     ]
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt · zwei Monate Praxis",
    "ru": "выбрал тему · два месяца практики"
   },
   {
    "de": "zwei Wege · Bruder · Ingenieur · auch ich · Absage · vierzig Bewerbungen",
    "ru": "два пути · брат · инженер · и я хочу · отказ · сорок откликов"
   },
   {
    "de": "Unterlagen · Arbeitsbuch · Wehrpass · Deutschland nicht",
    "ru": "документы · трудовая · военный билет · в Германии нет"
   },
   {
    "de": "Vorbereitung · Firma · Fragen",
    "ru": "подготовка · фирма · вопросы"
   },
   {
    "de": "Profil · programmieren · Java · Fazit",
    "ru": "профиль · программировать · Java · вывод"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 6,
  "name": "BEWERBUNGSGESPRÄCH",
  "kurz": "Собеседование",
  "war": 192,
  "auf_de": "Beschreiben Sie, worauf es bei einem Bewerbungsgespräch ankommt. Sprechen Sie über ein Land Ihrer Wahl (z. B. Berufsfeld, Vorbereitung, Kleidung, typische Fragen).",
  "auf_ru": "Опишите, что важно на собеседовании. Говорите о стране на ваш выбор (напр.: профессиональная сфера, подготовка, одежда, типичные вопросы).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Bewerbungsgespräch“ gewählt.",
     "ru": "Я выбрал тему «Собеседование»."
    }
   ],
   [
    {
     "de": "Ich war in der Ukraine bei mehreren Vorstellungsgesprächen — und erst das letzte hat mir gezeigt, worauf es wirklich ankommt.",
     "ru": "Я был в Украине на нескольких собеседованиях — и только последнее показало мне, что действительно важно."
    },
    {
     "de": "Das war in der Branche meines älteren Bruders.",
     "ru": "Оно было в отрасли моего старшего брата.",
     "n": true
    },
    {
     "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
     "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ.",
     "b": [
      8
     ],
     "n": true
    },
    {
     "de": "Auch ich möchte in dieser Branche arbeiten.",
     "ru": "Я тоже хочу работать в этой отрасли.",
     "b": [
      9
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Am wichtigsten ist die Vorbereitung: Ich informiere mich vorher über die Firma und ihre Kunden.",
     "ru": "Важнее всего подготовка: я заранее узнаю о фирме и её клиентах.",
     "b": [
      13
     ]
    },
    {
     "de": "Kleidung spielt in der IT kaum eine Rolle: Bei uns zählt die Erfahrung, nicht der Anzug.",
     "ru": "Одежда в IT почти не важна: у нас смотрят на опыт, а не на костюм."
    },
    {
     "de": "Die Fragen sind fast immer dieselben: Warum gerade wir? Welche Erfahrungen bringen Sie mit?",
     "ru": "Вопросы почти всегда одни и те же: почему именно мы? какой у вас опыт?",
     "b": [
      13
     ]
    }
   ],
   [
    {
     "de": "Auch bei den Unterlagen zeigt sich eine Besonderheit unseres Arbeitsmarktes: Lebenslauf und Diplom reichen nicht, man verlangt zusätzlich das Arbeitsbuch, ein Führungszeugnis, den Wehrpass und Empfehlungsschreiben.",
     "ru": "И в документах видна особенность нашего рынка труда: резюме и диплома мало, дополнительно требуют трудовую книжку, справку о несудимости, военный билет и рекомендательные письма.",
     "b": [
      12
     ],
     "n": true
    },
    {
     "de": "Soweit ich weiß, wird das in Deutschland für dieselbe Stelle nicht verlangt.",
     "ru": "Насколько я знаю, в Германии на такую же должность этого не требуют.",
     "b": [
      12
     ]
    }
   ],
   [
    {
     "de": "Ausschlaggebend ist am Ende aber, ob das eigene Profil zur Stelle passt.",
     "ru": "Но решающее в итоге — подходит ли собственный профиль под вакансию.",
     "b": [
      14
     ]
    },
    {
     "de": "Server und Cloud-Systeme beherrsche ich, aber gesucht war jemand, der auch programmieren kann — die Stelle habe ich damals nicht bekommen.",
     "ru": "Серверы и облачные системы я знаю уверенно, но искали человека, который ещё и программирует, — тогда меня не взяли.",
     "b": [
      14
     ],
     "n": true
    },
    {
     "de": "Inzwischen kann ich programmieren und beherrsche Java.",
     "ru": "Сейчас я умею программировать и владею Java.",
     "b": [
      14
     ]
    }
   ],
   [
    {
     "de": "Zusammenfassend kann ich sagen: Auf das Gespräch kann man sich vorbereiten, auf fehlende Erfahrung nicht.",
     "ru": "Подводя итог: подготовиться можно к разговору, но не к опыту, которого нет.",
     "b": [
      15
     ]
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt",
    "ru": "выбрал тему"
   },
   {
    "de": "mehrere Gespräche · das letzte · Branche des Bruders · Ingenieur · auch ich",
    "ru": "несколько собеседований · последнее · отрасль брата · инженер · и я хочу"
   },
   {
    "de": "Vorbereitung · Firma · Kleidung · Fragen",
    "ru": "подготовка · фирма · одежда · вопросы"
   },
   {
    "de": "Unterlagen · Arbeitsbuch · Wehrpass · Deutschland nicht",
    "ru": "документы · трудовая · военный билет · в Германии нет"
   },
   {
    "de": "Profil · programmieren · Java",
    "ru": "профиль · программировать · Java"
   },
   {
    "de": "Fazit: vorbereiten — Erfahrung nicht",
    "ru": "вывод: подготовиться — опыт нет"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 7,
  "name": "PRODUKT / DIENSTLEISTUNG",
  "kurz": "Продукт",
  "war": 232,
  "auf_de": "Beschreiben Sie ein Produkt / eine Dienstleistung Ihrer Wahl (z. B. Merkmale, Nutzen für Kunden, Vor- und Nachteile, Erfolg).",
  "auf_ru": "Опишите продукт или услугу на ваш выбор (напр.: характеристики, польза для клиентов, плюсы и минусы, успех).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „Produkt“ gewählt.",
     "ru": "Я выбрал тему «Продукт»."
    },
    {
     "de": "Ich möchte Ihnen ein Produkt vorstellen, ohne das mein Alltag kaum noch funktioniert.",
     "ru": "Я хочу представить вам продукт, без которого моя повседневная жизнь почти не обходится.",
     "r": "R5"
    }
   ],
   [
    {
     "de": "Es handelt sich um einen KI-Assistenten, also um ein Programm mit künstlicher Intelligenz, das Texte schreiben, Fragen beantworten und beim Lernen helfen kann.",
     "ru": "Речь идёт об ИИ-ассистенте, то есть о программе с искусственным интеллектом, которая умеет писать тексты, отвечать на вопросы и помогать в учёбе.",
     "n": true
    },
    {
     "de": "Ich selbst nutze vor allem Claude — sowohl beim Deutschlernen als auch im Alltag.",
     "ru": "Лично я пользуюсь прежде всего Claude — и при изучении немецкого, и в повседневной жизни."
    }
   ],
   [
    {
     "de": "Dieses Thema betrifft mich auch persönlich: Mein älterer Bruder leitet ein IT-Team.",
     "ru": "Эта тема касается меня и лично: мой старший брат руководит IT-командой."
    },
    {
     "de": "Seit Kriegsbeginn arbeitet er als ziviler Ingenieur für die ukrainischen Streitkräfte: Sein Team entwickelt KI-Lösungen.",
     "ru": "С начала войны он работает гражданским инженером на Вооружённые силы Украины: его команда разрабатывает решения на базе ИИ.",
     "b": [
      8
     ],
     "n": true
    },
    {
     "de": "Deshalb sehe ich jeden Tag, wie schnell sich diese Technologie weiterentwickelt.",
     "ru": "Поэтому я каждый день вижу, как быстро эта технология развивается дальше."
    },
    {
     "de": "Auch ich möchte in dieser Branche arbeiten.",
     "ru": "Я тоже хочу работать в этой отрасли.",
     "b": [
      9
     ],
     "n": true
    }
   ],
   [
    {
     "de": "Ein wesentlicher Vorteil ist, dass man die Grundversion kostenlos nutzen kann.",
     "ru": "Существенное преимущество в том, что базовой версией можно пользоваться бесплатно.",
     "r": "R3"
    },
    {
     "de": "Der Erfolg ist deutlich zu sehen: Solche Programme werden weltweit von Millionen Menschen genutzt.",
     "ru": "Успех виден отчётливо: такими программами по всему миру пользуются миллионы людей."
    }
   ],
   [
    {
     "de": "Vielen Migranten und älteren Menschen fällt der Umgang mit Behörden schwer.",
     "ru": "Многим мигрантам и пожилым людям тяжело даётся общение с ведомствами.",
     "b": [
      16
     ]
    },
    {
     "de": "Genau hier setzt die KI an: Sie erklärt schwierige Passagen in einfacher Sprache.",
     "ru": "Как раз здесь ИИ и вступает в дело: он объясняет трудные места простым языком."
    },
    {
     "de": "Allerdings gibt es auch einen erheblichen Nachteil: Die KI macht Fehler und erfindet manchmal Informationen.",
     "ru": "Однако есть и существенный недостаток: ИИ ошибается и иногда выдумывает информацию."
    },
    {
     "de": "Deshalb sollte man die Ergebnisse immer überprüfen.",
     "ru": "Поэтому результаты всегда стоит перепроверять."
    }
   ],
   [
    {
     "de": "Trotzdem wird künstliche Intelligenz immer besser und für immer mehr Menschen zugänglich — inzwischen sogar für Jugendliche unter achtzehn Jahren.",
     "ru": "И всё же искусственный интеллект становится всё лучше и доступнее для всё большего числа людей — теперь даже для подростков младше восемнадцати лет.",
     "n": true
    }
   ],
   [
    {
     "de": "Zusammenfassend kann ich sagen, dass die Vorteile überwiegen.",
     "ru": "Подводя итог, могу сказать, что преимущества перевешивают.",
     "r": "R1"
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt · ohne das mein Alltag",
    "ru": "выбрал тему · без него никак"
   },
   {
    "de": "KI-Assistent · Texte, Fragen, Lernen · Claude",
    "ru": "ИИ-ассистент · тексты, вопросы, учёба · Claude"
   },
   {
    "de": "persönlich · Bruder · Ingenieur · jeden Tag · auch ich",
    "ru": "лично · брат · инженер · каждый день · и я хочу"
   },
   {
    "de": "kostenlos · Millionen Menschen",
    "ru": "бесплатно · миллионы людей"
   },
   {
    "de": "Migranten · Behörden · Passagen · Nachteil: Fehler · überprüfen",
    "ru": "мигранты · ведомства · трудные места · минус: ошибки · проверять"
   },
   {
    "de": "Trotzdem: immer besser · zugänglich · Jugendliche",
    "ru": "и всё же: всё лучше · доступнее · подростки"
   },
   {
    "de": "Fazit: Vorteile überwiegen",
    "ru": "вывод: плюсы перевешивают"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 },
 {
  "nr": 8,
  "name": "SELBSTSTÄNDIGKEIT",
  "kurz": "Своё дело",
  "war": 201,
  "auf_de": "Sie möchten sich selbstständig machen. Beschreiben Sie Ihre Geschäftsidee (z. B. welches Produkt / welche Dienstleistung, Besonderheiten, Zielgruppe).",
  "auf_ru": "Вы хотите открыть собственное дело. Опишите вашу бизнес-идею (напр.: какой продукт или какая услуга, особенности, целевая группа).",
  "abs": [
   [
    {
     "de": "Ich habe das Thema „sich selbstständig machen“ gewählt.",
     "ru": "Я выбрал тему «Открыть своё дело»."
    }
   ],
   [
    {
     "de": "Nach fünf Jahren als angestellter IT-Techniker möchte ich nicht mehr für andere arbeiten, sondern einen eigenen kleinen Computerservice eröffnen.",
     "ru": "После пяти лет наёмным IT-техником я больше не хочу работать на других — я хочу открыть собственный небольшой компьютерный сервис.",
     "n": true
    },
    {
     "de": "Mein Angebot würde aus drei Teilen bestehen: Computer reparieren, Software installieren und Smart-Home-Systeme einrichten.",
     "ru": "Моё предложение состояло бы из трёх частей: ремонт компьютеров, установка программ и настройка систем умного дома."
    }
   ],
   [
    {
     "de": "Ein wesentlicher Vorteil dieser Geschäftsidee ist, dass man kein großes Startkapital braucht.",
     "ru": "Существенное преимущество этой бизнес-идеи в том, что не нужен большой стартовый капитал.",
     "r": "R3"
    },
    {
     "de": "Außerdem besteht eine große Nachfrage nach solchen Dienstleistungen.",
     "ru": "Кроме того, на такие услуги существует большой спрос."
    },
    {
     "de": "Vielen Migranten und älteren Menschen fällt der Umgang mit der Technik schwer, und sie sind bereit, dafür zu zahlen.",
     "ru": "Многим мигрантам и пожилым людям тяжело даётся обращение с техникой, и они готовы за это платить.",
     "b": [
      16
     ]
    }
   ],
   [
    {
     "de": "Ich spreche die Sprache meiner Kunden — die russischsprachige Community in Dresden ist groß.",
     "ru": "Я говорю на языке своих клиентов — русскоязычное сообщество в Дрездене большое."
    },
    {
     "de": "Englisch ist heute sowieso Pflicht.",
     "ru": "Английский сегодня и так обязателен."
    }
   ],
   [
    {
     "de": "Das Besondere: Smart Home ist für mich kein Luxus, sondern Hilfe im Alltag — Licht, Heizung und Sicherheit für Menschen, die allein leben.",
     "ru": "Особенность: умный дом для меня не роскошь, а помощь в быту — свет, отопление и безопасность для тех, кто живёт один.",
     "r": "R4"
    }
   ],
   [
    {
     "de": "Diese Geschäftsidee hat gute Zukunftschancen, weil viele Menschen Unterstützung im Alltag brauchen.",
     "ru": "У этой бизнес-идеи хорошие перспективы, потому что многим людям нужна поддержка в повседневной жизни."
    },
    {
     "de": "Mittelfristig, wenn ich einen festen Kundenstamm hätte, könnte ich Mitarbeiter einstellen — auf Minijob-Basis oder in Vollzeit.",
     "ru": "В среднесрочной перспективе, если бы у меня была постоянная клиентура, я мог бы нанимать сотрудников — на мини-джоб или на полную ставку."
    }
   ],
   [
    {
     "de": "Zusammenfassend kann ich sagen, dass diese Geschäftsidee realistisch ist und gut zu meinen Fähigkeiten passt — jetzt bin ich bereit, die Verantwortung zu übernehmen.",
     "ru": "Подводя итог, могу сказать, что эта бизнес-идея реалистична и хорошо соответствует моим способностям, — теперь я готов взять на себя ответственность.",
     "r": "R1",
     "n": true
    }
   ],
   [
    {
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "ru": "Большое спасибо за внимание."
    }
   ]
  ],
  "sk": [
   {
    "de": "Thema gewählt",
    "ru": "выбрал тему"
   },
   {
    "de": "fünf Jahre angestellt → Computerservice · drei Teile",
    "ru": "пять лет в найме → сервис · три услуги"
   },
   {
    "de": "Startkapital · Nachfrage · Migranten · zahlen",
    "ru": "капитал · спрос · мигранты · платят"
   },
   {
    "de": "Sprache · Community · Englisch Pflicht",
    "ru": "язык · сообщество · английский"
   },
   {
    "de": "Besondere: kein Luxus, sondern Hilfe",
    "ru": "особенность: не роскошь, а помощь"
   },
   {
    "de": "Zukunftschancen · Mitarbeiter · Minijob",
    "ru": "перспективы · сотрудники · мини-джоб"
   },
   {
    "de": "Fazit: realistisch · Verantwortung",
    "ru": "вывод: реалистично · ответственность"
   },
   {
    "de": "Dank",
    "ru": "спасибо"
   }
  ]
 }
];

// Слова: [немецкое, произношение (со слов носителя, не правлено), перевод, подсказка]
var WOERTER = [
['gewählt', 'гевэльт (ударение на льт)', 'выбрал (wählen — выбирать)', ''],
['handelt', 'хАндельт', 'es handelt sich um — речь идёт о', ''],
['die Verteidigung', 'Фертайдигунг', 'оборона', ''],
['die Sicherheit', 'зихе(щь?)хайт', 'безопасность; надёжность', 'ЗИ-хьа-хайт: ch после i — мягкое «хь», не «щ»'],
['einführt', 'айнфюрт', 'внедряет (einführen — внедрять)', ''],
['älterer', 'эльтере', 'старший (mein älterer Bruder)', ''],
['verteilt', 'фертайльт', 'распределена (verteilen — распределять; der Teil — часть)', ''],
['enge', 'энге', 'сжатые, жёсткие (enge Fristen — сжатые сроки)', ''],
['die Fristen', 'Фристен', 'сроки (die Frist — срок)', ''],
['die Geheimhaltung', 'Гехайм-хальтунг', 'секретность', ''],
['landet', 'ландэт', 'попадает, оказывается (landen)', ''],
['zufällig', 'цуфелиХ', 'случайно', ''],
['auszeichnet', 'аусцайхнет', 'отличает, выделяет (auszeichnen). В тексте: «что отличает такую фирму» — по смыслу её особенность', ''],
['verfolgen', 'феафольген', 'преследовать (цель); ein Ziel verfolgen — добиваться цели', ''],
['ständig', 'штЭндиХ', 'постоянно', 'во второй записи было «штэндлих» — без Л: ШТЭН-дихь'],
['halten', 'хальтен', 'держать', ''],
['hohem', 'хохэм', 'высоком (от hoch: auf hohem Niveau)', ''],
['das Niveau', 'Ниво', 'уровень', ''],
['zurückfällt', 'цурукфэльт', 'отстаёт; в тексте «кто отстаёт» (zurückfallen — отставать)', 'ü звучит как «ю»: цу-РЮК-фэльт'],
['uninteressant', 'ударение на начальное un', 'неинтересный', ''],
['fachlich', 'фахлих', 'профессионально, в профессиональном плане', ''],
['menschlich', 'меншлих', 'по-человечески', ''],
['der Unterschied', 'тут длинная И', 'разница', 'УН-та-шиит: на конце Т'],
['spürbar', 'шпюрбаА', 'ощутимый, заметный', ''],
['zählt', 'цэльт', 'считает; имеет значение', ''],
['wächst', 'вэкст', 'растёт (wachsen)', ''],
['die Aufstiegschancen', 'АуфштигсшанЗен', 'шансы на карьерный рост', 'Chancen — французское слово, ША́НСЭН: «с», не «з»'],
['zählen', 'Цэлен', 'считать; иметь значение', ''],
['beschreiben', 'бешрАЙбен', 'описывать', ''],
['brennen', 'брЭннен', 'гореть; für etwas brennen — гореть чем-то, быть увлечённым', ''],
['der Fehler', 'Феля', 'ошибка', ''],
['offene', 'оффене', 'открытая', ''],
['die Berufswahl', 'беруфсВАЛЬ', 'выбор профессии', 'обычно ударение на РУФ: бэ-РУУФС-вааль'],
['die Ereignisse', 'Эрайгниссе', 'события', ''],
['er lehnte ab', 'Эа ленте аП', 'он отказал (ablehnen — отказывать)', ''],
['eigener', 'айгенЭ', 'собственный (sein eigener Bruder)', '-er на конце обычно звучит как короткое «а»: АЙ-гэ-на'],
['beleidigt', 'беляйдихтЬ', 'обиженный', ''],
['2014', 'цвайтаузенд-фИАцейн', 'две тысячи четырнадцатый', ''],
['begann', 'беганн', 'начал (beginnen)', ''],
['die Verteidigungsindustrie', 'феартайдигунгс-индустри', 'оборонная промышленность', ''],
['erfuhr', 'эафуа', 'узнал (erfahren)', ''],
['2020', 'цвай-таузенд-цванцищь', 'две тысячи двадцатый', 'на конце мягкое «хь»: ЦВАН-цихь'],
['ziviler', 'цивиля', 'гражданский', ''],
['der Ingenieur', 'инжиньОр', 'инженер', ''],
['die Streitkräfte', 'штрайт-крэфте', 'вооружённые силы', 'ä — это «э»: штрайт-КРЭФ-тэ (в первой записи было «крафте»)'],
['vorher', 'фоХэа', 'раньше, до этого', ''],
['durfte', 'дуфтэ', 'мог, имел право (dürfen)', ''],
['verstand', 'ферштанд', 'понял (verstehen)', 'd на конце звучит как «т»: фэа-ШТАНТ'],
['ausschlaggebend', 'Аус-шлаг-геббент', 'решающий', 'долгое «ее», без двойного б: АУС-шлаак-гее-бэнт'],
['strebe … an', 'штребе', 'стремлюсь (anstreben — стремиться к чему-то)', ''],
['gezielt', 'гэцильт', 'целенаправленно', ''],
['die Tätigkeit', 'Тэтигкайт', 'деятельность, работа', '-ig- звучит как «ихь»: ТЭ-тихь-кайт'],
['größten', 'гр(йо)стен', 'самый большой (größte)', 'ГРЁЁС-тэн: ö — «ё» без «й»'],
['hatte', 'хаттЭ', 'имел (haben, прошедшее)', ''],
['bleibt', 'бляйбт', 'остаётся (bleiben)', ''],
['attraktivste', 'аТТрактивсте', 'самая привлекательная', ''],
['das Vorbild', 'ФОбилТ', 'пример для подражания', ''],
['wichtiger', 'на конце произносим Э', 'важнее', '-er на конце обычно звучит как короткое «а»: ВИХЬ-ти-га'],
['je zuvor', 'е цуфор', 'когда-либо прежде (wichtiger als je zuvor — важнее, чем когда-либо)', 'на конце «а», не «р»: йе цу-ФОА'],
['die Eigenschaften', 'АЙгеншафтен', 'качества, черты (характера)', ''],
['zeichnen … aus', 'цайхнен', 'отличают (auszeichnen); само zeichnen — рисовать', ''],
['besonders', 'беЗондерс', 'особенно', ''],
['die Arbeitsweise', 'АбайтсВайЗЕ', 'манера работы, стиль работы', ''],
['zeigt', 'Цайгт', 'показывает; zeigt sich — проявляется', ''],
['sieht', 'зиит', 'видит; sieht man — видно', ''],
['verliert', 'феалирт', 'теряет (verlieren)', ''],
['die Brocken', 'БрокЭн', 'куски, ломти (in kleine Brocken — на мелкие куски)', ''],
['stolz', 'штольц', 'гордый; stolz sein auf — гордиться', 'верно'],
['unter', 'унтА', 'под; unter Druck — под давлением; unter … Bedingungen — в … условиях', ''],
['äußerst', 'ойсерст', 'крайне', ''],
['die Bedingungen', 'БенДинГунГун', 'условия', 'бэ-ДИН-гун-гэн'],
['beigebracht', 'байгебрахт', 'научил (beibringen)', ''],
['die Fußstapfen', 'ФусШтапФен', 'следы; in seine Fußstapfen treten — идти по его стопам', ''],
['beherrsche', 'бЭхЭРшЭ', 'владею (beherrschen)', ''],
['der Erfolg', 'дэА ЭрфольГ', 'успех', 'g на конце звучит как «к»: эа-ФОЛЬК'],
['erklärt', 'эрклэрт', 'объясняет', ''],
['einfacher', 'айнфаха', 'простой (als einfacher Techniker — простым техником)', ''],
['immer', 'иммА', 'всегда; immer besser — всё лучше', ''],
['die Technologie', 'Технологи', 'технология', 'ударение на последний слог: тэхь-но-ло-ГИИ'],
['die Intelligenz', 'интелИгЭнС', 'интеллект', 'z на конце — «ц»: ин-тэ-ли-ГЭНЦ'],
['sogar', 'с/з?огА', 'даже', 's перед гласной — «з»: зо-ГАА'],
['zugänglich', 'цугЭнлишЬ', 'доступный', 'на конце «хь», не «шь»: ЦУУ-гэн-лихь'],
['die Versionen', 'ВерЗионен', 'версии', 'корректор права: слово иностранное, V здесь как «в»'],
['bestehen', 'БештеХЭн', 'состоять (aus — из); существовать', 'h внутри не произносится: бэ-ШТЕЕ-эн'],
['einrichten', 'АЙНриХтен', 'настраивать, оборудовать', ''],
['russischsprachige', 'Русиш шпрахиГЭ', 'русскоязычная', ''],
['sowieso', 'зо-ви-зо', 'всё равно, и так', ''],
['die Pflicht', 'ПФлихт', 'обязанность, обязаловка', ''],
['allein', 'алЯйн', 'один, в одиночку', ''],
['leben', 'лЕбен', 'жить', ''],
['mittelfristig', 'миТТель-фристиг', 'в среднесрочной перспективе', '-ig на конце — «ихь»: МИ-тэль-фри-стихь'],
['der Kundenstamm', 'кунденШтаММ', 'постоянная клиентура', ''],
['hätte', 'хЭттЕ', 'имел бы (Konjunktiv II от haben)', ''],
];

// Новые слова этого варианта — без записи произношения
WOERTER = WOERTER.concat([
 [
  "der Kriegsbeginn",
  "",
  "начало войны (seit Kriegsbeginn — с начала войны)",
  "новое слово — произношение не записано"
 ],
 [
  "die Abteilung, -en",
  "",
  "отдел (drei Abteilungen — три отдела)",
  "новое слово — произношение не записано"
 ],
 [
  "die Besonderheit",
  "",
  "особенность",
  "новое слово — произношение не записано"
 ],
 [
  "der Arbeitsplatz",
  "",
  "рабочее место (der Arbeitsplatz ist sicher — место надёжное)",
  "новое слово — произношение не записано"
 ],
 [
  "die Absage",
  "",
  "отказ",
  "новое слово — произношение не записано"
 ],
 [
  "schockiert",
  "",
  "шокирован",
  "новое слово — произношение не записано"
 ],
 [
  "erlebt (erleben)",
  "",
  "испытал, пережил (habe ich selbst erlebt — испытал на себе)",
  "новое слово — произношение не записано"
 ],
 [
  "der Überblick",
  "",
  "общая картина, обзор (den Überblick verlieren — терять общую картину)",
  "новое слово — произношение не записано"
 ],
 [
  "zerlegt (zerlegen)",
  "",
  "разбирает, разбивает на части",
  "новое слово — произношение не записано"
 ],
 [
  "die Bewerbungsmappe",
  "",
  "папка с документами для отклика",
  "новое слово — произношение не записано"
 ],
 [
  "eröffnen",
  "",
  "открывать (дело, фирму)",
  "новое слово — произношение не записано"
 ],
 [
  "die Verantwortung",
  "",
  "ответственность",
  "новое слово — произношение не записано"
 ],
 [
  "übernehmen",
  "",
  "брать на себя, перенимать",
  "новое слово — произношение не записано"
 ],
 [
  "bereit",
  "",
  "готов (bereit sein, … zu … — быть готовым …)",
  "новое слово — произношение не записано"
 ]
]);
