let body = document.getElementById("body");
let welcome = document.createElement("div");
let btnStart = document.createElement("div");
let question = document.createElement("div");
let pays = document.createElement("div");
let responsList = document.createElement("ul");
let btnNext = document.createElement("div");

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
question.id = "question";
question.textContent = "Who is the capital of ";

welcome.id = "welcome";
welcome.textContent = "Welcome to the Quizz GASY";

let randInt = Math.floor(Math.random() * questionsList.length);
pays.id = "pays";
pays.textContent = questionsList[ randInt ].pays + " ?";

for (let i=0; i<4; ++i) {
    let choix = document.createElement('li');
    choix.textContent = questionsList[ randInt ].choix[i];
    responsList.append(choix);
    choix.addEventListener('click', () => {
        choix.style.color = "#fff";
        if (choix.textContent !== questionsList[ randInt ].capital) {
            choix.style.background = "#FF0B37";
        }
        else choix.style.background = "#01FF3B"; 
    });
}


btnStart.id = "start";
btnStart.textContent = "Play ";

body.append(welcome, btnStart);

btnStart.addEventListener('click', () => {
    body.removeChild(btnStart);
    body.removeChild(welcome);
    body.append(question, pays, responsList);
});