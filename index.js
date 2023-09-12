function clear(balise) {
    balise.innerHTML = "";
}

function editing(balise, id, text) {
    balise.id = id;
    balise.textContent = text;
}

function getRandInt(max) {
    return Math.floor(Math.random()*max);
}

function drawChoix(responses, pos) {
    for (let i=0; i<4; ++i) {
        let choix = document.createElement('li');
        choix.textContent = questionsList[pos].choix[i];
        choix.addEventListener('click', () => {
            if (choix.textContent !== questionsList[ randInt ].capital) {
                choix.style.background = "#FF0B37";
                compensation.textContent = texts.loses[getRandInt(texts.loses.length)];
                compensation.style.color = "#FF0B37";
            }
            else {
                choix.style.background = "#01FF3B";
                compensation.textContent = texts.wins[getRandInt(texts.wins.length)];
                compensation.style.color = "#01ff3b";
            }
        });
        responses.append(choix);
    }
}
let body = document.getElementById("body");

let texts = {
    loses : ["Try again !", "It's not that !","Sorry !", "Oops !"],
    wins : ["Good !!!", "You rook !!!", "Congrats !!!", "Yes! It's that !!"]
}

let questionsList = [
    {
        pays: "Madagasikara",
        choix: ["Fianarantsoa","Itasy", "Antsirabe", "Antananarivo"],
        capital : "Antananarivo"
    },
    {
        pays: "Espagne",
        choix: ["Madrid","Barcelona", "Cadiz", "Doha"],
        capital : "Madrid"
    },
    {
        pays: "Mozambika",
        choix: ["Maputo","Victoria", "Antsirabe", "Fianarantsoa"],
        capital : "Maputo"
    },
    {
        pays: "France",
        choix: ["Paris","Nice", "Marseille", "Nantes"],
        capital : "Paris"
    }
];

let randInt = getRandInt(questionsList.length);
let question = document.createElement("div");
let welcome = document.createElement("div");
let responsList = document.createElement("ul");
let pays = document.createElement("div");
let compensation = document.createElement("div");
let btnStart = document.createElement("div");
let btnNext = document.createElement("div");

editing(question, "question", "Who is the capital of ");
editing(welcome, "welcome", "Welcome to the Quizz Game");
editing(pays, "pays", questionsList[randInt].pays+ " ?");
compensation.id = "compensation";

drawChoix(responsList, randInt);

body.append(compensation);

editing(btnStart, "start", "Play");
editing(btnNext, "next", "Next");

btnStart.addEventListener('click', () => {
    body.removeChild(btnStart);
    body.removeChild(welcome);
    body.append(question, pays, responsList, compensation, btnNext);
});

btnNext.addEventListener('click', () => {
    randInt = getRandInt(questionsList.length);
    clear(responsList);
    clear(compensation);
    pays.textContent = questionsList[ randInt ].pays + " ?";
    drawChoix(responsList, randInt);
});

body.append(welcome, btnStart);