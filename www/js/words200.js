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

let loading = true;
let words = words200;

function setWordsStorage(){
    localStorage.setItem('words', JSON.stringify(words));
}

function getWordsStorage(){
    words = JSON.parse(localStorage.getItem('words'));
}


function updateFromServer(func){
    fetch('https://lyssovdmitriy.github.io/deutsch_words/words.html').then(function(response){
        let promise = response.json();
        promise.then(function(data){
            words = data;
            setWordsStorage();
            if(func !== null){
                func();
            }
        })

    });
}

updateFromServer();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWord(){
    getWordsStorage();
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