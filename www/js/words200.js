let words200 = [
    {"de": "das Leben", "ru": "жизнь"},
    {"de": "lesen", "ru": "читать"},
    {"de": "machen", "ru": "делать"},
    {"de": "denken", "ru": "думать"},
    {"de": "reisen", "ru": "путешествовать"},
    {"de": "spielen", "ru": "играть"},
    {"de": "warten", "ru": "ждать дожидаться"},
    {"de": "werden", "ru": "становиться делаться"},
    {"de": "wohnen", "ru": "жить обитать, проживать"},
    {"de": "das Alter", "ru": "возраст"},
    {"de": "wollen", "ru": "хотеть"},
    {"de": "die Eltern", "ru": "родители"},
    {"de": "die Familie", "ru": "семья"},
    {"de": "die Frau", "ru": "женщина жена"},
    {"de": "das Kind", "ru": "ребенок"},
    {"de": "das Jahr", "ru": "год"},
    {"de": "der Tag", "ru": "день"},
    {"de": "der Monat", "ru": "месяц"},
    {"de": "ich", "ru": "я"},
    {"de": "die Welt", "ru": "мир"},
    {"de": "weiter", "ru": "дальше"},
    {"de": "alles", "ru": "всё"},
    {"de": "weit", "ru": "далеко"},
    {"de": "bald", "ru": "скоро"},
    {"de": "die Seite", "ru": "сторона, страница"},
    {"de": "durch", "ru": "через сквозь"},
    {"de": "die Zahl", "ru": "число"},
    {"de": "alt", "ru": "старый, пожилой, древний, старинный"},
    {"de": "die Arbeit", "ru": "труд работа"},
    {"de": "frei", "ru": "свободный независимый"},
    {"de": "immer", "ru": "всегда"},
    {"de": "klein", "ru": "маленький малый небольшой"},
    {"de": "du", "ru": "ты"},
    {"de": "neu", "ru": "новый, недавний"},
    {"de": "verheiratet", "ru": "женатый, замужняя"},
    {"de": "verwitwet", "ru": "овдовевший"},
    {"de": "da", "ru": "тут, там, здесь"},
    {"de": "erst", "ru": "сперва, только"},
    {"de": "etwa", "ru": "около приблизительно, разве"},
    {"de": "etwas", "ru": "нечто, что-нибудь, немного"},
    {"de": "hier", "ru": "здесь тут, вот"},
    {"de": "jetzt", "ru": "теперь сейчас"},
    {"de": "leider", "ru": "к сожалению"},
    {"de": "noch", "ru": "(пока) ещё, по-прежнему, всё ещё"},
    {"de": "kein", "ru": "никакой"},
    {"de": "schon", "ru": "уже"},
    {"de": "übrigens", "ru": "впрочем вообще"},
    {"de": "aber", "ru": "но"},
    {"de": "aus", "ru": "из"},
    {"de": "das (es)", "ru": "это"},
    {"de": "dein", "ru": "твой (твоя твоё твои)"},
    {"de": "von", "ru": "от"},
    {"de": "was", "ru": "что?"},
    {"de": "wer", "ru": "кто?"},
    {"de": "wie", "ru": "как?"},
    {"de": "wieviel", "ru": "сколько?"},
    {"de": "ach so!", "ru": "вот как! значит так! ах так!"},
    {"de": "auf Wiedersehen!", "ru": "до свидания!"},
    {"de": "schön", "ru": "красивый прекрасный"},
    {"de": "stehen", "ru": "стоять"},
    {"de": "der Abend", "ru": "вечер"},
    {"de": "zur Zeit", "ru": "в настоящее время"},
    {"de": "der Mann, die Männer", "ru": "мужчина супруг"},
    {"de": "fest", "ru": "крепкий прочный твердый"},
    {"de": "nicht", "ru": "не ни"},
    {"de": "der Lehrer", "ru": "учитель, преподаватель, наставник"},
    {"de": "und", "ru": "и"},
    {"de": "das Land, die Länder", "ru": "страна, край"},
    {"de": "auch", "ru": "также тоже, и, впрочем"},
    {"de": "später", "ru": "поздний, позднеe, после этого"},
    {"de": "dort", "ru": "там"},
    {"de": "kaufen", "ru": "купить, покупать"},
    {"de": "verkaufen", "ru": "продавать"},
    {"de": "zusammen", "ru": "вместе, сообща"},
    {"de": "dann", "ru": "тогда, потом затем"},
    {"de": "die Stunde", "ru": "час"},
    {"de": "möglich", "ru": "возможный (возможно)"},
    {"de": "die Liebe", "ru": "любовь"},
    {"de": "liegen", "ru": "лежать, быть расположенным"},
    {"de": "antworten", "ru": "отвечать, давать ответ"},
    {"de": "kommen", "ru": "приходить прибывать"},
    {"de": "entschuldigen", "ru": "извинять прощать"},
    {"de": "funktionieren", "ru": "функционировать, действовать, работать"},
    {"de": "kosten", "ru": "стоить, пробовать"},
    {"de": "sagen", "ru": "сказать, говорить"},
    {"de": "spülen", "ru": "полоскать промывать мыть"},
    {"de": "stimmen", "ru": "соответствовать (истине), быть верным"},
    {"de": "waschen", "ru": "мыть, стирать, промывать"},
    {"de": "wechseln", "ru": "менять(ся), обменивать, разменивать"},
    {"de": "die Antwort", "ru": "ответ, отклик"},
    {"de": "das Benzin", "ru": "бензин"},
    {"de": "das Bett", "ru": "постель, кровать"},
    {"de": "das Bild", "ru": "картина, рисунок"},
    {"de": "der Fehler", "ru": "ошибка"},
    {"de": "heißen", "ru": "называть зваться"},
    {"de": "das Geld", "ru": "деньги"},
    {"de": "das Geschäft", "ru": "дело занятие, сделка, магазин"},
    {"de": "das Haus, die Häuser", "ru": "дом здание строение"},
    {"de": "der Haushalt, ", "ru": "домашнее хозяйство"},
    {"de": "der Herd, ", "ru": "очаг плита"},
    {"de": "die Idee, ", "ru": "идея, мысль"},
    {"de": "können", "ru": "мочь уметь"},
    {"de": "schnell", "ru": "быстро"},
    {"de": "sein", "ru": "быть"},
    {"de": "das Regal", "ru": "полка, стеллаж"},
    {"de": "anders", "ru": "по другому"},
    {"de": "in", "ru": "в внутри"},
    {"de": "haben", "ru": "иметь"},
    {"de": "der Stuhl, die Stühle", "ru": "стул"},
    {"de": "der Tisch", "ru": "стол"},
    {"de": "der Topf, die Töpfe", "ru": "горшок, кастрюля"},
    {"de": "die Uhr", "ru": "часы"},
    {"de": "die Sonne", "ru": "солнце"},
    {"de": "gehen", "ru": "идти ходить, уходить"},
    {"de": "die Zeit", "ru": "время"},
    {"de": "ähnlich", "ru": "похожий, сходный, подобный"},
    {"de": "sehen", "ru": "смотреть глядеть"},
    {"de": "ehrlich", "ru": "честный, порядочный"},
    {"de": "kaputt", "ru": "разбитый, сломанный"},
    {"de": "groß", "ru": "большой крупный"},
    {"de": "lustig", "ru": "весёлый, забавный"},
    {"de": "originell", "ru": "оригинальный своеобразный"},
    {"de": "sehr", "ru": "очень весьма, крайне"},
    {"de": "heute", "ru": "сегодня"},
    {"de": "viel", "ru": "много, многие, многое"},
    {"de": "oder", "ru": "или"},
    {"de": "sondern", "ru": "а но"},
    {"de": "zu", "ru": "к на, в"},
    {"de": "raus", "ru": "наружу"},
    {"de": "danke", "ru": "спасибо"},
    {"de": "bitte", "ru": "пожалуйста"},
    {"de": "die Lampe", "ru": "лампа"},
    {"de": "trinken", "ru": "пить"},
    {"de": "essen", "ru": "есть кушать"},
    {"de": "der Bleistift", "ru": "карандаш"},
    {"de": "ordnen", "ru": "приводить в порядок, систематизировать"},
    {"de": "der Beruf", "ru": "профессия, специальность"},
    {"de": "der Arzt, die Ärzte", "ru": "врач, доктор"},
    {"de": "der Baum, die Bäume", "ru": "дерево"},
    {"de": "nach", "ru": "после"},
    {"de": "auf", "ru": "на (горизонтальной пов-ти)"},
    {"de": "gegen", "ru": "против, около"},
    {"de": "als", "ru": "как когда"},
    {"de": "das Auto", "ru": "автомобиль"},
    {"de": "er", "ru": "он"},
    {"de": "bestellen", "ru": "заказывать"},
    {"de": "bezahlen", "ru": "платить, выплачивать, расплачиваться"},
    {"de": "brauchen", "ru": "нуждаться"},
    {"de": "genau", "ru": "точно именно"},
    {"de": "glauben", "ru": "полагать думать, верить"},
    {"de": "kochen", "ru": "варить готовить (пищу), стряпать, кипятить"},
    {"de": "mögen", "ru": "любить, чувствовать расположение"},
    {"de": "über", "ru": "над"},
    {"de": "üben", "ru": "упражняться"},
    {"de": "das Abendessen", "ru": "ужин"},
    {"de": "die Anzeige", "ru": "объявление, заявление уведомление"},
    {"de": "der Apfel, die Äpfel", "ru": "яблоко"},
    {"de": "müssen", "ru": "быть должным"},
    {"de": "das Brot", "ru": "хлеб"},
    {"de": "zwischen", "ru": "между"},
    {"de": "die Butter", "ru": "масло (животное)"},
    {"de": "unter", "ru": "под"},
    {"de": "das Ei, die Eier", "ru": "яйцо"},
    {"de": "das Eis", "ru": "лёд, мороженое"},
    {"de": "die Erdbeere", "ru": "клубника земляника"},
    {"de": "die Flasche", "ru": "бутылка, фляжка"},
    {"de": "das Fleisch", "ru": "мясо"},
    {"de": "die Frage", "ru": "вопрос"},
    {"de": "selbst", "ru": "сам"},
    {"de": "das Frühstück", "ru": "завтрак"},
    {"de": "die Gabel", "ru": "вилка"},
    {"de": "die Zeitung", "ru": "газета"},
    {"de": "das Gemüse", "ru": "овощи зелень"},
    {"de": "das Gericht", "ru": "блюдо кушанье, суд"},
    {"de": "das Gespräch", "ru": "разговор, беседа"},
    {"de": "das Getränk", "ru": "напиток, питьё"},
    {"de": "das Gewürz", "ru": "пряности, приправа"},
    {"de": "das Glas, die Gläser", "ru": "стекло, стакан, рюмка"},
    {"de": "das Prozent", "ru": "процент"},
    {"de": "der Käse", "ru": "сыр, творог"},
    {"de": "der Kuchen", "ru": "- пирог, пирожное"},
    {"de": "der Löffel", "ru": "ложка"},
    {"de": "mehr", "ru": "больше"},
    {"de": "das Messer", "ru": "нож"},
    {"de": "der Nachtisch", "ru": "десерт"},
    {"de": "das Öl", "ru": "масло (растительное)"},
    {"de": "der Pfeffer", "ru": "перец"},
    {"de": "die Blume", "ru": "цветок"},
    {"de": "der Preis", "ru": "цена"},
    {"de": "der Reis", "ru": "рис"},
    {"de": "der Saft, die Säfte", "ru": "сок"},
    {"de": "die Sahne", "ru": "сливки"},
    {"de": "der Schinken", "ru": "ветчина"},
    {"de": "die Soße", "ru": "соус подливка"},
    {"de": "langsam", "ru": "медленно"},
    {"de": "das Wasser", "ru": "вода"},
    {"de": "die Suppe", "ru": "суп, похлёбка"},
    {"de": "die Tasse", "ru": "чашка (чайная)"},
    {"de": "der Teller", "ru": "тарелка"},
    {"de": "die Tomate", "ru": "помидор"}
];

let words = [ { "de": "essen", "ru": "кушать" }, { "de": "trinken", "ru": "пить" }, { "de": "Hunger haben", "ru": "Быть голодным" }, { "de": "Durst haben", "ru": "Иметь жажду" }, { "de": "das Frühstück", "ru": "завтрак" }, { "de": "frühstücken", "ru": "завтракать" }, { "de": "das Mittagessen", "ru": "обед" }, { "de": "die Küche", "ru": "кухня" }, { "de": "die Suppe", "ru": "Суп" }, { "de": "Guten Appetit!", "ru": "Приятного аппетита" }, { "de": "das Geschäft", "ru": "магазин" }, { "de": "die Bäckerei", "ru": "булочная, пекарня" }, { "de": "der Supermarkt", "ru": "супермаркет" }, { "de": "geöffnet (von - bis)", "ru": "открытый (от - до)" }, { "de": "das Brot", "ru": "хлеб" }, { "de": "das Brötchen", "ru": "булочка" }, { "de": "die Butter", "ru": "масло" }, { "de": "die Milch", "ru": "молоко" }, { "de": "der Käse", "ru": "сыр" }, { "de": "das Ei", "ru": "яйцо" }, { "de": "der Fisch", "ru": "рыба" }, { "de": "das Fleisch", "ru": "мясо" }, { "de": "das Hähnchen", "ru": "курица" }, { "de": "der Schinken", "ru": "ветчина" }, { "de": "das Gemüse", "ru": "овощи" }, { "de": "die Tomate", "ru": "помидор" }, { "de": "die Kartoffel", "ru": "картошка" }, { "de": "die Pommes (frites) (Plural)", "ru": "картофель фри" }, { "de": "das Öl", "ru": "масло растительное" }, { "de": "die Nudeln (Plural) ", "ru": "лапша" }, { "de": "Plural", "ru": "множественное число" }, { "de": "der Kuchen", "ru": "пирог" }, { "de": "das Obst", "ru": "фрукты" }, { "de": "die Orange", "ru": "апельсин" }, { "de": "der Apfel", "ru": "яблоко" }, { "de": "die Banane", "ru": "банан" }, { "de": "die Birne", "ru": "груша" }, { "de": "der Reis", "ru": "рис" }, { "de": "das Salz", "ru": "соль" }, { "de": "das Getränk", "ru": "напиток" }, { "de": "das Wasser", "ru": "вода" }, { "de": "das Kaffee", "ru": "кофе" }, { "de": "der Tee", "ru": "чай" }, { "de": "backen", "ru": "печь" }, { "de": "der Saft", "ru": "сок" }, { "de": "das Bier", "ru": "пиво" }, { "de": "der Wein", "ru": "вино" }, { "de": "kaufen", "ru": "покупать" }, { "de": "einkaufen", "ru": "закупатся" }, { "de": "verkaufen", "ru": "продавать" }, { "de": "das Angebot", "ru": "предложение на скидку" }, { "de": "günstig, billing", "ru": "дешевый" }, { "de": "teuer", "ru": "дорогой" }, { "de": "mögen", "ru": "любить" }, { "de": "brauchen ", "ru": "нуждаться" }, { "de": "nehmen", "ru": "брать, взять" }, { "de": "es gibt", "ru": "есть, имеется, (есьжи)" }, { "de": "das Kilo", "ru": "килограмм" }, { "de": "das Pfund", "ru": "пол кило" }, { "de": "das Gramm", "ru": "грамм" }, { "de": "kosten", "ru": "стоить" }, { "de": "der Preis", "ru": "цена" }, { "de": "bezahlen / zahlen", "ru": "платить / оплачивать" }, { "de": "bar (bezahlen)", "ru": "наличные" }, { "de": "die Kasse", "ru": "касса" }, { "de": "das Geld", "ru": "деньги" }, { "de": "der Euro", "ru": "евро" }, { "de": "das Restaurant", "ru": "ресторан" }, { "de": "das Cafe", "ru": "кафе" }, { "de": "die Speisekarte", "ru": "меню" }, { "de": "bestellen", "ru": "заказывать" }, { "de": "die Rechnung", "ru": "счет" }, { "de": "bekommen", "ru": "получать" }, { "de": "bringen", "ru": "приносить" }, { "de": "die Bestellung", "ru": "заказ" }, { "de": "die Post", "ru": "почта" }, { "de": "der Brief", "ru": "письмо" }, { "de": "die Postkarte", "ru": "открытка" }, { "de": "schicken", "ru": "посылать" }, { "de": "bekommen", "ru": "получать" }, { "de": "abholen", "ru": "забирать" }, { "de": "die Briefmarke", "ru": "почтовая марка" }, { "de": "der Absender", "ru": "отправитель" }, { "de": "der Empfänger", "ru": "получатель" }, { "de": "die Adresse", "ru": "адрес" }, { "de": "das Telefon", "ru": "телефон" }, { "de": "das Handy", "ru": "сотовый телефон" }, { "de": "das Fax", "ru": "факс" }, { "de": "die Telefonnummer", "ru": "номер телефона" }, { "de": "das Telefonbuch", "ru": "телефонная книга" }, { "de": "telefonieren", "ru": "звонить" }, { "de": "der Anruf", "ru": "звонок" }, { "de": "der Anrufbeantworter", "ru": "автоответчик" }, { "de": "besetzt", "ru": "занятый" }, { "de": "die Bank", "ru": "банк" }, { "de": "der Schalter", "ru": "окошко (кассы, справочной)" }, { "de": "bar zahlen", "ru": "платить наличными" }, { "de": "die Kreditkarte", "ru": "кредитная карта" }, { "de": "das Konto, die Konten", "ru": "счет в банке" }, { "de": "überweisen", "ru": "переводить деньги" }, { "de": "das Formular", "ru": "формуляр" }, { "de": "ausfüllen", "ru": "заполнить" }, { "de": "ankreuzen", "ru": "поставить крестик" }, { "de": "untershreiben", "ru": "подписывать" }, { "de": "der Geldautomat", "ru": "банкомат" }, { "de": "das Internet", "ru": "интернет" }, { "de": "die Email", "ru": "емейл" }, { "de": "der Computer", "ru": "компьютер" }, { "de": "Pass, Reisepass", "ru": "пасспорт" }, { "de": "der Ausweis ", "ru": "удостоверение" }, { "de": "güetig", "ru": "действительный" }, { "de": "das Auge", "ru": "глаз" }, { "de": "die Hand", "ru": "кисть руки" }, { "de": "der Arm", "ru": "рука" }, { "de": "das Bein", "ru": "нога" }, { "de": "der Kopf ", "ru": "голова" }, { "de": "der Fuß", "ru": "стопа" }, { "de": "der Mund", "ru": "рот" }, { "de": "der Zahn", "ru": "зуб" }, { "de": "die Nase", "ru": "нос" }, { "de": "das Ohr", "ru": "ухо" }, { "de": "das Haar", "ru": "волос" }, { "de": "der Bauch", "ru": "живот" }, { "de": "weh tun", "ru": "делать больно" }, { "de": "schlafen", "ru": "спать" }, { "de": "ins Bett gehen", "ru": "идти спать" }, { "de": "im Bett liegen", "ru": "лежать в постеле" }, { "de": "krank", "ru": "больной" }, { "de": "das Fieber", "ru": "жар, температура" }, { "de": "der Arzt, die Ärztin", "ru": "врач" }, { "de": "der Zahnarzt", "ru": "стоматолог" }, { "de": "die Zahnärztin", "ru": "стоматолог (ж)" }, { "de": "der Dortor", "ru": "доктор" }, { "de": "die Apotheke", "ru": "аптека" }, { "de": "das Medikament", "ru": "лекарство" }, { "de": "die Praxis", "ru": "врачебный кабинет" }, { "de": "geöffnet (sein)", "ru": "открытый" }, { "de": "geschlossen (sein)", "ru": "закрытый" }, { "de": "der Vorname", "ru": "имя" }, { "de": "der Nachname", "ru": "фамилия" }, { "de": "der Familienname", "ru": "фамилия" }, { "de": "heißen", "ru": "зваться, называться" }, { "de": "buchstabieren", "ru": "произносить по буквам" }, { "de": "die Frau", "ru": "женщина" }, { "de": "der Mann", "ru": "мужчина" }, { "de": "die Dame", "ru": "дама" }, { "de": "der Herr", "ru": "господин" }, { "de": "männlich", "ru": "мужской" }, { "de": "weiblich", "ru": "женский" }, { "de": "das Mädchen", "ru": "девочка" }, { "de": "der Junge", "ru": "мальчик" }, { "de": "die Adresse", "ru": "адрес" }, { "de": "der Wohnor", "ru": "место жительства" }, { "de": "wohnen", "ru": "жить" }, { "de": "leben", "ru": "жить" }, { "de": "die Straße", "ru": "улица" }, { "de": "der Platz", "ru": "площадь, место" }, { "de": "die Nummer", "ru": "номер" }, { "de": "die Hausnummer", "ru": "номер дома" }, { "de": "die Stadt", "ru": "город" }, { "de": "die Postleitzahl", "ru": "почтовый индекс" }, { "de": "das Dorf", "ru": "деревня" }, { "de": "das Land", "ru": "страна" }, { "de": "anrufen", "ru": "звонить" }, { "de": "das Geburtsdatum", "ru": "дата рождения" }, { "de": "der Geburtstag", "ru": "день рождения" }, { "de": "geboren in", "ru": "родился в" }, { "de": "der Familienstand", "ru": "семейное положение" }, { "de": "die Familie", "ru": "семья" }, { "de": "verheiratet", "ru": "женатый" }, { "de": "ledig", "ru": "холостой" }, { "de": "heiraten", "ru": "жениться" }, { "de": "die Ehefrau", "ru": "жена" }, { "de": "der Ehenmann", "ru": "муж" }, { "de": "die Hochzeit", "ru": "свадьба" }, { "de": "der Vater", "ru": "папа" }, { "de": "die Mutter", "ru": "мама" }, { "de": "die Eltern", "ru": "родители" }, { "de": "das Kind", "ru": "ребенок" }, { "de": "das Baby", "ru": "младенец" }, { "de": "der Sohn", "ru": "сын" }, { "de": "die Tochter", "ru": "дочь" }, { "de": "der Bruder", "ru": "брат" }, { "de": "die Schwester", "ru": "сестра" }, { "de": "die Geschwister", "ru": "братья и сестры" }, { "de": "die Grossmutter / Oma", "ru": "бабушка" }, { "de": "der Grossvater / Opa", "ru": "дедушка" }, { "de": "die Freundin", "ru": "подруга" }, { "de": "der/die Bekannte", "ru": "знакомый" }, { "de": "der/die Erwachsene", "ru": "взрослый" }, { "de": "der Jungendliche", "ru": "молодежь" }, { "de": "der Kindergarten", "ru": "детский сад" }, { "de": "der Pass", "ru": "паспорт" }, { "de": "der Reisepass", "ru": "загранпаспорт" }, { "de": "der Ausweis", "ru": "удостоверение" }, { "de": "die Papiere", "ru": "бумага, документы" }, { "de": "das Formular", "ru": "формуляр, бланк" }, { "de": "ein Formular ausfüllen", "ru": "заполнить формуляр" }, { "de": "die Staatsangehörigkeit", "ru": "гражданство" }, { "de": "der Führerschein", "ru": "водительские права" }, { "de": "untershreiben", "ru": "подписывать" }, { "de": "die Untershrift", "ru": "подпись" }, { "de": "die Freizeit", "ru": "свободное время" }, { "de": "die Ferien", "ru": "каникулы" }, { "de": "der Urlaub", "ru": "отпуск" }, { "de": "Ferien / Urlaub machen", "ru": "быть в отпуске / на каникулах" }, { "de": "das Hobby", "ru": "хобби" }, { "de": "spielen", "ru": "играть" }, { "de": "Fussball spielen", "ru": "играть в футбол" }, { "de": "der Ball", "ru": "мяч" }, { "de": "Karten spielen", "ru": "играть в карты" }, { "de": "Gitarre spielen", "ru": "играть на гитаре" }, { "de": "die Musik", "ru": "музыка" }, { "de": "die CD", "ru": "диск" }, { "de": "wandern", "ru": "путешествовать пешком" }, { "de": "schwimmen", "ru": "плавать" }, { "de": "lesen ", "ru": "читать" }, { "de": "das Buch", "ru": "книга" }, { "de": "die Zeitung", "ru": "газета" }, { "de": "fernsehen", "ru": "смотреть ТВ" }, { "de": "tanzen", "ru": "танцевать" }, { "de": "der Computer", "ru": "компьютер" }, { "de": "der Sport", "ru": "спорт" }, { "de": "Sport machen", "ru": "заниматься спортом" }, { "de": "ins Kino gehen", "ru": "идти в кино" }, { "de": "das Kino", "ru": "кино" }, { "de": "einen Film sehen", "ru": "смотреть фильм" }, { "de": "Rad fahren", "ru": "кататься на велосипеде" }, { "de": "spazieren gehen", "ru": "идти гулять" }, { "de": "in die Disco gehen", "ru": "идти на дискотеку" }, { "de": "die Disco", "ru": "дискотека" }, { "de": "das Museum, Museen", "ru": "музей" }, { "de": "der Verein", "ru": "объединение, община" }, { "de": "der Sportverein", "ru": "спортивное обьединение" }, { "de": "sich anmelden", "ru": "регистрироваться" }, { "de": "die Anmeldung", "ru": "регистрация" }, { "de": "das Schwimmbad", "ru": "бассейн" }, { "de": "gefallen", "ru": "нравится" }, { "de": "das gefällt mir", "ru": "мне нравится это" }, { "de": "das gefällt mir nicht", "ru": "мне не нравится это" }, { "de": "schön", "ru": "красивый" }, { "de": "interessant", "ru": "интересный" }, { "de": "mögen", "ru": "любить" }, { "de": "ich mag", "ru": "я люблю" }, { "de": "es gibt", "ru": "есть, имеется (есьжи)" }, { "de": "geöffnet", "ru": "открытый" }, { "de": "geschlossen", "ru": "закрытый" }, { "de": "von - bis", "ru": "от до" }, { "de": "die Karte", "ru": "билет" }, { "de": "die Eintrittskarte", "ru": "входной билет" }, { "de": "das Ticket", "ru": "билет" }, { "de": "kaufen", "ru": "покупать" }, { "de": "reservieren", "ru": "бронировать " }, { "de": "zeigen", "ru": "показывать" }, { "de": "der Weg", "ru": "дорога" }, { "de": "den Weg zeigen", "ru": "показывать дорогу" }, { "de": "den Weg suchen", "ru": "искать дорогу" }, { "de": "wer?", "ru": "кто?" }, { "de": "was?", "ru": "что?" }, { "de": "woher?", "ru": "откуда?" }, { "de": "wohin?", "ru": "куда?" }, { "de": "wen?", "ru": "кого?" }, { "de": "wann?", "ru": "когда?" }, { "de": "wo?", "ru": "где?" }, { "de": "wie?", "ru": "как?" }, { "de": "wie oft?", "ru": "как часто?" }, { "de": "wie viel?", "ru": "сколько?" }, { "de": "wie weit?", "ru": "как далеко?" }, { "de": "wie lange?", "ru": "как долго?" }, { "de": "warum?", "ru": "почему?" }, { "de": "wozu?", "ru": "зачем?" }, { "de": "wessen?", "ru": "чей? чья? чьё? чьи?" }, { "de": "welcher?", "ru": "какой?" }, { "de": "wlches?", "ru": "какое?" }, { "de": "welche?", "ru": "какая? какие?" }, { "de": "geradeaus", "ru": "прямо" }, { "de": "links", "ru": "слева" }, { "de": "rechts", "ru": "справа" }, { "de": "die Ecke", "ru": "угол" }, { "de": "das Auto", "ru": "машина" }, { "de": "der Bus", "ru": "автобус" }, { "de": "das Fahrrad", "ru": "велосипед" }, { "de": "der Zug", "ru": "поезд" }, { "de": "die Strassenbahn", "ru": "трамвай" }, { "de": "die U-Bahn", "ru": "метро" }, { "de": "das Taxi", "ru": "такси" }, { "de": "das Schiff", "ru": "корабль" }, { "de": "parken", "ru": "парковаться" }, { "de": "halten", "ru": "останавливаться" }, { "de": "die Autobahn", "ru": "шоссе" }, { "de": "die Polizei", "ru": "полиция" }, { "de": "rufen", "ru": "кричать, звать" }, { "de": "der Führerschein", "ru": "водительские права" }, { "de": "das Flugzeug", "ru": "самолет" }, { "de": "fliegen", "ru": "лететь" }, { "de": "der Flughafen", "ru": "аэропорт" }, { "de": "der Bahnhof", "ru": "жд вокзал" }, { "de": "die Haltestelle", "ru": "остановка" }, { "de": "die Linie", "ru": "маршрут" }, { "de": "abfahren", "ru": "отъезжать" }, { "de": "die Abfahrt", "ru": "отъезд" }, { "de": "abfliegen", "ru": "вылетать" }, { "de": "der Abflug", "ru": "вылет" }, { "de": "ankommen", "ru": "прибывать" }, { "de": "die Ankunft", "ru": "прибытие" }, { "de": "die Ankunft", "ru": "прибытие" }, { "de": "die Fahrt", "ru": "поездка" }, { "de": "dauern", "ru": "длится" }, { "de": "einsteigen", "ru": "входить" }, { "de": "aussteigen", "ru": "выходить" }, { "de": "umsteigen", "ru": "пересаживаться" }, { "de": "ab", "ru": "отъезд" }, { "de": "an ", "ru": "прибытие" }, { "de": "die Fahrkarte", "ru": "проездной билет" }, { "de": "das Ticket", "ru": "билет" }, { "de": "hin und zurück", "ru": "туда и обратно" }, { "de": "wohnen", "ru": "жить" }, { "de": "die Wohnung", "ru": "квартира" }, { "de": "das Haus", "ru": "дом" }, { "de": "das Zimmer", "ru": "комната" }, { "de": "das Wohnzimmer", "ru": "зал, гостинная" }, { "de": "ds Schlafzimmer", "ru": "спальня" }, { "de": "das Kinderzimmer", "ru": "детская" }, { "de": "die Küche", "ru": "кухня" }, { "de": "das Badezimmer", "ru": "ванная" }, { "de": "die Toilette / das WC", "ru": "туалет" }, { "de": "der Raum", "ru": "пмещение" }, { "de": "der Quadratmeter", "ru": "квадратный метр" }, { "de": "der Stock", "ru": "этаж" }, { "de": "im ersten Stock wohnen", "ru": "жить на первом этаже" }, { "de": "die Miete", "ru": "квартплата" }, { "de": "der Mieter", "ru": "арендатор" }, { "de": "der Vermieter", "ru": "квартиросдатчик" }, { "de": "vermieten", "ru": "сдавать" }, { "de": "umziehen", "ru": "переезжать" }, { "de": "die Tür", "ru": "дверь" }, { "de": "das Fenster", "ru": "окно" }, { "de": "die Wand", "ru": "стена" }, { "de": "der Eingang ", "ru": "вход" }, { "de": "der Ausgang", "ru": "выход" }, { "de": "mieten", "ru": "снимать" }, { "de": "der Balkon", "ru": "блкон" }, { "de": "der Garten", "ru": "сад" }, { "de": "die Garage", "ru": "гараж" }, { "de": "die Möbel", "ru": "мебель" }, { "de": "der Tisch", "ru": "стол" }, { "de": "der Stuhl", "ru": "стул" }, { "de": "der Schrank", "ru": "шкаф" }, { "de": "das Bett", "ru": "кровать" }, { "de": "der Herd", "ru": "плита" }, { "de": "der Kühlschrank", "ru": "холодильник" }, { "de": "die Dusche", "ru": "душ" }, { "de": "das Handtuch", "ru": "полотенце" }, { "de": "das Bild", "ru": "картина" }, { "de": "der Spiegel", "ru": "зеркало" }, { "de": "die Uhr", "ru": "часы" }, { "de": "das Licht", "ru": "свет" }, { "de": "das Licht anmachen", "ru": "подключить свет" }, { "de": "das Licht ausmachen", "ru": "отключить свет" }, { "de": "der Aufzug", "ru": "лифт" }, { "de": "die Treppe", "ru": "лестница" }, { "de": "der Balkon", "ru": "балкон" }, { "de": "das Apartment", "ru": "апартаменты" }, { "de": "die Post", "ru": "почта" }, { "de": "der Brief", "ru": "письмо" }, { "de": "die Postkarte", "ru": "открытка" }, { "de": "schicken", "ru": "посылать" }, { "de": "bekommen", "ru": "получать" }, { "de": "abholen", "ru": "забирать" }, { "de": "die Briefmarke", "ru": "почтовая марка" }, { "de": "der Absender", "ru": "отправитель" }, { "de": "der Empfänger", "ru": "получатель" }, { "de": "die Adresse", "ru": "адрес" }, { "de": "das Telefon", "ru": "телефон" }, { "de": "das Handy", "ru": "сотовый" }, { "de": "das Fax", "ru": "факс" }, { "de": "die Telefonnummer", "ru": "номер телефона" }, { "de": "das Telefonbuch", "ru": "телефонная книга" }, { "de": "telefonieren", "ru": "звонить" }, { "de": "der Anruf", "ru": "звонок" }, { "de": "anrufen", "ru": "звонить" }, { "de": "der Anrufbeantworter", "ru": "автоответчик" }, { "de": "besetzt", "ru": "занятый" }, { "de": "die Bank", "ru": "банк" }, { "de": "der Schalter", "ru": "окошко" }, { "de": "das Geld", "ru": "деньги" }, { "de": "bar zahlen", "ru": "платить наличными" }, { "de": "die Kreditkarte", "ru": "кредитная карта" }, { "de": "das Konto, die Konten", "ru": "счет в банке" }, { "de": "überweisen", "ru": "переводить деньги" }, { "de": "das Formular", "ru": "формуляр" }, { "de": "ausfüllen", "ru": "заполнять" }, { "de": "ankreuzen", "ru": "поставить крестик" }, { "de": "erste, zweite Klasse", "ru": "первый, второй класс" }, { "de": "das Gepäck", "ru": "багаж" }, { "de": "der Koffer", "ru": "чемодан" }, { "de": "die Tasche", "ru": "мешок" }, { "de": "die Reisetasche", "ru": "дорожная сумка" }, { "de": "der Urlaub", "ru": "отпуск" }, { "de": "die Ferien (Plural)", "ru": "праздники (множественное число)" }, { "de": "Urlaub machen", "ru": "Отпуск" }, { "de": "Ferien machen", "ru": "Сделать каникулы" }, { "de": "frei haben", "ru": "гулять" }, { "de": "die Reise", "ru": "путешествие" }, { "de": "reisen", "ru": "путешествовать" }, { "de": "der Tourist / die Touristin", "ru": "турист / туристка" }, { "de": "die Information", "ru": "информация" }, { "de": "das Reisebüro", "ru": "бюро путешествий" }, { "de": "der Reiseführer", "ru": "путеводитель" }, { "de": "der Ausflug", "ru": "экскурсия" }, { "de": "besichtigen", "ru": "осмотреть" }, { "de": "besuchen", "ru": "посетить" }, { "de": "Ferien machen", "ru": "сделать каникулы" }, { "de": "die Reise", "ru": "путешествие" }, { "de": "reisen", "ru": "путешествовать" }, { "de": "der Tourist / die Touristin", "ru": "турист / туристка" }, { "de": "die Information", "ru": "информация" }, { "de": "das Reisebüro", "ru": "бюро путешествий" }, { "de": "der Reiseführer", "ru": "путеводитель" }, { "de": "der Ausflug", "ru": "экскурсия" }, { "de": "besichtigen", "ru": "осмотреть" }, { "de": "besuchen", "ru": "посетить" }, { "de": "die Sehenswürdigkeit", "ru": "достопримечательность" }, { "de": "das Hotel", "ru": "отель" }, { "de": "die Pension", "ru": "пансион" }, { "de": "die Rezeption", "ru": "регистрация" }, { "de": "reservieren", "ru": "резервировать" }, { "de": "das Formular", "ru": "формуляр" }, { "de": "ausfüllen", "ru": "заполнить" }, { "de": "die Nummer", "ru": "номер" }, { "de": "der Schlüssel", "ru": "ключ" }, { "de": "zahlen, bezahlen", "ru": "платить, платить" }, { "de": "das Einzelzimmer", "ru": "одноместный номер" }, { "de": "das Doppelzimmer", "ru": "двухместный номер" }, { "de": "mit Dusche/Bad", "ru": "с душем / ванной" }, { "de": "ohne Dusche/Bad", "ru": "без душа / ванны" }, { "de": "mit Frühstück", "ru": "с завтраком" }, { "de": "ohne Frühstück", "ru": "без завтрака" }, { "de": "die Halbpension", "ru": "полупансион" }, { "de": "die Vollpension", "ru": "полный пансион" }, { "de": "Schöne Ferien!", "ru": "Приятного Отдыха!" }, { "de": "Gute Reise!", "ru": "Счастливого Пути!" }, { "de": "die Kleidung", "ru": "одежда" }, { "de": "der Pullover", "ru": "свитер" }, { "de": "der Rock", "ru": "рок" }, { "de": "die Hose", "ru": "брюки" }, { "de": "das Hemd", "ru": "рубашка" }, { "de": "die Schuhe (Plural)", "ru": "обувь (множественное число)" }, { "de": "die Jacke", "ru": "куртка" }, { "de": "der Mantel", "ru": "пальто" }, { "de": "die Jeans", "ru": "джинсы" }, { "de": "die Größe", "ru": "размер" }, { "de": "die Farbe", "ru": "цвет" }, { "de": "schwarz", "ru": "черный" }, { "de": "weiß", "ru": "белый" }, { "de": "grau", "ru": "серый" }, { "de": "rot", "ru": "красный" }, { "de": "blau", "ru": "синий" }, { "de": "die Jacke", "ru": "куртка" }, { "de": "der Mantel", "ru": "пальто" }, { "de": "die Jeans", "ru": "джинсы" }, { "de": "die Größe", "ru": "размер" }, { "de": "die Farbe", "ru": "цвет" }, { "de": "schwarz", "ru": "черный" }, { "de": "weiß", "ru": "белый" }, { "de": "grau", "ru": "серый" }, { "de": "rot", "ru": "красный" }, { "de": "blau", "ru": "синий" }, { "de": "gelb", "ru": "желтый" }, { "de": "grün", "ru": "зеленый" }, { "de": "braun", "ru": "коричневый" }, { "de": "das Geschäft", "ru": "магазин" }, { "de": "der Laden", "ru": "загрузка" }, { "de": "der Verkäufer", "ru": "продавец" }, { "de": "die Verkäuferin", "ru": "продавщица" }, { "de": "der Kunde", "ru": "клиент" }, { "de": "die Kundin", "ru": "клиентка" }, { "de": "bestellen", "ru": "заказать" }, { "de": "die Bestellung", "ru": "заказ" }, { "de": "die Überweisung", "ru": "перевод" }, { "de": "überweisen", "ru": "переводить" }, { "de": "die Kredikarte", "ru": "на платежи кредитными картами" }, { "de": "bar zahlen", "ru": "платить наличными" }, { "de": "der Preis", "ru": "цена" }, { "de": "die Kundin", "ru": "клиентка" }, { "de": "bestellen", "ru": "заказать" }, { "de": "die Bestellung", "ru": "заказ" }, { "de": "die Überweisung", "ru": "перевод" }, { "de": "überweisen", "ru": "переводить" }, { "de": "die Kredikarte", "ru": "на платежи кредитными картами" }, { "de": "bar zahlen", "ru": "платить наличными" }, { "de": "der Preis", "ru": "цена" }, { "de": "das Angebot", "ru": "предложение" }, { "de": "günstig, billig", "ru": "дешево, дешево" }, { "de": "teuer", "ru": "дорогой" }, { "de": "zahlen/bezahlen", "ru": "платить / платить" }, { "de": "anziehen", "ru": "одеться" }, { "de": "ausziehen", "ru": "раздеться" }, { "de": "die Schule", "ru": "школа" }, { "de": "die Chefin", "ru": "начальница" }, { "de": "die Klasse", "ru": "класс" }, { "de": "der Kollege", "ru": "коллега" }, { "de": "der Lehrer", "ru": "учитель" }, { "de": "die Kollegin", "ru": "коллега" }, { "de": "die Lehrerin", "ru": "учительница" }, { "de": "die Firma, Firmen", "ru": "компания, компании" }, { "de": "der Schüler", "ru": "ученик" }, { "de": "das Büro", "ru": "офис" }, { "de": "die Schülerin", "ru": "школьница" }, { "de": "arbeitslos", "ru": "безработный" }, { "de": "lernen", "ru": "учиться" }, { "de": "der Arbeiter", "ru": "работник" }, { "de": "der Unterricht", "ru": "урок" }, { "de": "das Praktikum, Praktika", "ru": "стажировка, стажировки" }, { "de": "der Kurs", "ru": "курс" }, { "de": "die Ausbildung", "ru": "обучение" }, { "de": "die Pause", "ru": "пауза" }, { "de": "eine Ausbildung machen", "ru": "получение образования" }, { "de": "die Hausaufgabe", "ru": "домашнее задание" }, { "de": "der Urlaub", "ru": "отпуск" }, { "de": "die Prüfung", "ru": "экзамен" }, { "de": "selbstständig", "ru": "самостоятельный" }, { "de": "die Hausaufgabe", "ru": "домашнее задание" }, { "de": "der Urlaub", "ru": "отпуск" }, { "de": "die Prüfung", "ru": "экзамен" }, { "de": "selbstständig", "ru": "самостоятельный" }, { "de": "die Lösung", "ru": "решение" }, { "de": "die Stelle", "ru": "точка" }, { "de": "der Fehler", "ru": "ошибка" }, { "de": "Geld verdienen", "ru": "Зарабатывание денег" }, { "de": "die Arbeit", "ru": "работа" }, { "de": "eine schwere Arbeit", "ru": "тяжелая работа" }, { "de": "der Beruf", "ru": "профессия" }, { "de": "eine leichte Arbeit", "ru": "легкая работа" }, { "de": "er ist Mechaniker", "ru": "он механик" }, { "de": "von Beruf", "ru": "по профессии" }, { "de": "das Internet", "ru": "Интернет" }, { "de": "der Computer", "ru": "компьютер" }, { "de": "der Arbeitsplatz", "ru": "рабочее место" }, { "de": "der Drucker", "ru": "принтер" }, { "de": "der Job", "ru": "работа" }, { "de": "der Bleistift", "ru": "карандаш" }, { "de": "arbeiten", "ru": "работать" }, { "de": "der Kugelschreiber", "ru": "шариковая ручка" }, { "de": "der Chef", "ru": "начальник" }, { "de": "der Schreibtisch", "ru": "письменный стол" } ];

// function setWordsStorage(){
//     localStorage.setItem('words', JSON.stringify(words));
// }
//
// function getWordsStorage(){
//     words = JSON.parse(localStorage.getItem('words'));
// }


// function updateFromServer(func){
//     fetch('https://lyssovdmitriy.github.io/deutsch_words/words.html').then(function(response){
//         let promise = response.json();
//         promise.then(function(data){
//             words = data;
//             setWordsStorage();
//             if(func !== null){
//                 func();
//             }
//         })
//
//     });
// }
//
// updateFromServer();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWord(){
    // getWordsStorage();
    return words[getRandomInt(0,words.length - 1)];
}

function getWordDe(){
    let word = getRandomWord();
    let randoms = [
        getRandomWord().ru,
        getRandomWord().ru,
        getRandomWord().ru,
        word.ru
    ];

    return {
        word: word.de,
        options: shuffle(randoms),
        answer: word.ru
    }
}

function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function getWordRu(){
    let word = getRandomWord();
    let randoms = [
        getRandomWord().de,
        getRandomWord().de,
        getRandomWord().de,
        word.de
    ];

    return {
        word: word.ru,
        options: shuffle(randoms),
        answer: word.de
    }
}