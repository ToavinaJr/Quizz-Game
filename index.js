let body = document.getElementById("body");

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
        choix: ["Paris","Nice", "Marseille", "Nante"],
        capital : "Paris"
    }
];

let question = document.createElement("div");
let responsList = document.createElement("ul");

question.id = "question";
question.textContent = "Who is the capital of ";

let welcome = document.createElement("div");
welcome.id = "welcome";
welcome.textContent = "Welcome to the Quizz GASY";

let pays = document.createElement("div");
let randInt = Math.floor(Math.random() * questionsList.length);
pays.id = "pays";
pays.textContent = questionsList[ randInt ].pays + " ?";

let compensation = document.createElement("div");
compensation.id = "compensation";

for (let i=0; i<4; ++i) {
    let choix = document.createElement('li');
    choix.textContent = questionsList[ randInt ].choix[i];
    choix.addEventListener('click', () => {
        choix.style.color = "#fff";
        if (choix.textContent !== questionsList[ randInt ].capital) {
            choix.style.background = "#FF0B37";
            compensation.textContent = "Oops!";
        }
        else {
            choix.style.background = "#01FF3B";
            compensation.textContent = "Bien";
        }
    });
    responsList.append(choix);
}

body.append(compensation);

let btnStart = document.createElement("div");
btnStart.id = "start";
btnStart.textContent = "Play ";

let btnNext = document.createElement("div");
btnNext.id = "next";

btnNext.textContent = "Next";
btnStart.addEventListener('click', () => {
    body.removeChild(btnStart);
    body.removeChild(welcome);
    body.append(question, pays, responsList, compensation, btnNext);
});

btnNext.addEventListener('click', () => {
    randInt = Math.floor(Math.random() * questionsList.length);
    responsList.innerHTML = "";
    compensation.innerHTML = "";
    pays.textContent = questionsList[ randInt ].pays + " ?";
    for (let i=0; i<4; ++i) {
        let choix = document.createElement('li');
        choix.textContent = questionsList[ randInt ].choix[i];
        choix.addEventListener('click', () => {
            choix.style.color = "#fff";
            if (choix.textContent !== questionsList[ randInt ].capital) {
                choix.style.background = "#FF0B37";
                compensation.textContent = "Oops!";
            }
            else {
                choix.style.background = "#01FF3B";
                compensation.textContent = "Bien";
            }
        });
        responsList.append(choix);
    }
});

body.append(welcome, btnStart);