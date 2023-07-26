const startPage = document.getElementById('start')
const startButton = document.getElementById('start-categories')
const categoriesPage = document.getElementById('categories')
const categories = document.querySelectorAll(".category-btn");
const startQuizButton = document.getElementById('start-quiz')
const quizPage = document.getElementById('quiz')
const questionTag = document.getElementById('question')
const questionNumber = document.getElementById('currentQuestion')
const answersContainer = document.getElementById('answers')
const answerATag = document.getElementById('answerA')
const answerBTag = document.getElementById('answerB')
const answerCTag = document.getElementById('answerC')
const answerDTag = document.getElementById('answerD')
const nextQuestion = document.getElementById('nextQuestions')
const scorePage = document.getElementById('score')
const user = document.getElementById('username')
const scoreUser = document.getElementById('user')
const scoreResult = document.getElementById('result')
const scorePercantage = document.getElementById('percentage')

let questionsIndex = 0; //index questions 
let indexNumber = 0; // question number
let score = 0;

// go to category selection
startButton.addEventListener('click', selectCategories)
function selectCategories() {
    startPage.style.display = "none";
    categoriesPage.style.display = "flex";
}

// set the state of the start quiz button if category was selected
function setStartBtnState() {
  let categorySelected = false;
  categories.forEach((category) => {
    if (category.classList.contains("catSelected")) {
        categorySelected = true;
        startQuizButton.style.backgroundColor = "#043004";
        startQuizButton.style.letterSpacing = ".2em";
    }
  });
  startQuizButton.disabled = !categorySelected;
}

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((category) => {
      category.classList.remove("catSelected");
    });
    category.classList.add("catSelected");
    setStartBtnState();
  });
});
setStartBtnState();

//start quiz//
startQuizButton.addEventListener('click', startQuiz)

function startQuiz() {
    categoriesPage.style.display = "none";
    quizPage.style.display = "flex";
    if (worldCupBtn.classList.contains("catSelected")) {
        questions = worldCupQuestions;
        categoryTitle.textContent = "Mistrzostwa Świata";
    } else if (clubCupsBtn.classList.contains("catSelected")) {
        questions = clubCupsQuestions;
        categoryTitle.textContent = "Klubowe Puchary";
    } else if (leaguesBtn.classList.contains("catSelected")) {
        questions = leaguesQuestions;
        categoryTitle.textContent = "Ligi Światowe";
    } else if (recordsBtn.classList.contains("catSelected")) {
        questions = recordsQuestions;
        categoryTitle.textContent = "Rekordy I Ciekawostki";
    }
    runQuestion(questions);
    startAndResetTimer();
}

let counter = 20;
let interval;

function startAndResetTimer() {
  clearInterval(interval); // stop the previous countdown
  counter = 20;
  timeLeft = document.getElementById('timer');
  timeLeft.innerHTML = counter;
  timeLeft.style.color = "darkblue";
  timeLeft.style.fontSize = "1.2em";

  interval = setInterval(() => {
    counter--;
    if (counter >= 0) {
      timeLeft = document.getElementById('timer');
      timeLeft.innerHTML = counter;
      if (counter <= 5) {
        timeLeft.style.fontSize = "1.7em";
        timeLeft.style.color = "red";
      } 
    } else {
      clearInterval(interval);
      disabled(); // score = 0
    }
  }, 1000);  // 1000 ms = 1 sec
}

// categories
const worldCupBtn = document.querySelector("#worldCup");
const clubCupsBtn = document.querySelector("#clubCups");
const leaguesBtn = document.querySelector("#leagues");
const recordsBtn = document.querySelector("#records");
const categoryTitle = document.querySelector('#category');

// //questions and answers//
const worldCupQuestions = [
  {
    question: "Kto został królem strzelców na mundialu we Francji w 1998 roku?",
    answers: ["Davor Šuker", "Dennis Bergkamp", "Ronaldo Nazario", "Thierry Henry"],
    correct: "answerA",
  },
  {
    question: "Kto zagrał w finale mundialu w 2006 roku?",
    answers: ["Francja-Brazylia", "Włochy-Francja", "Brazylia-Niemcy", "Hiszpania-Holandia"],
    correct: "answerB",
  },
  {
    question: "Kto jest 2-krotnym Mistrzem Świata?",
    answers: ["Romario", "Cafu", "Rivaldo", "Roberto Carlos"],
    correct: answerB,
},
{
    question: "Która reprezentacja zagrała w meczu finałowym mundialu?",
    answers: ["Portugalia", "Bułgaria", "Szwecja", "Jugosławia"],
    correct: answerC,
},
{
    question: "Kto jest rekordzistą pod względem liczby zdobytych bramek na mundialu?",
    answers: ["Ronaldo Nazario", "Miroslav Klose", "Cristiano Ronaldo", "Pelé"],
    correct: "answerB",
  },
  {
    question: "Kto strzelił decydującego karnego w finale mundialu 2022 roku?",
    answers: ["Lionel Messi", "Nicolas Otamendi", "Gonzalo Montiel" , "Marcos Acuña"],
    correct: answerC,
  }
];

const clubCupsQuestions = [
    {
        question: "Kto wygrał ostatni Puchar Zdobywcow Pucharów?",
        answers: ["Parma", "Olympique Marseille", "Feyenoord", "Lazio"],
        correct: answerD,
    },
    {
        question: "Który klub nie posiada honorowej odznaki Ligi Mistrzów?",
        answers: ["AC Milan", "FC Barcelona", "Manchester United", "Ajax Amsterdam"],
        correct: answerC,
    },
    {
        question: "Kto zagrał w pierwszym finale Pucharu Europy w 1956 roku?",
        answers: ["Real Madryt - AC Milan", "Real Madryt - Eintracht Frankfurt", "Real Madryt - Stade de Reims", "Real Madryt - Hamburger SV"],
        correct: answerC,
    },
    {
        question: "Który klub zdobył azjatycką Ligę Mistzrów w 2023 roku?",
        answers: ["Urawa Red Diamonds", "Al-Hilal", "Gamba Osaka", "FC Seoul"],
        corerct: answerA,
    }
];

const leaguesQuestions = [
    {
        question:  "W których sezonach Napoli zdobylo Mistrzostwo Włoch?",
        answers: ["1986/87, 1989/90, 2022/23", "1988/89, 1989/90, 2022/23", "1980/81, 1986/87, 2022/23", "1982/83, 1986/87, 2022/23"],
        correct: answerA,
    },
    {
        question: "W którym klubie nie grał Christian Vieri?",
        answers: ["Roma", "Milan", "Inter", "Juventus"],
        correct: answerA,
    },
    {
        question: "Która z drużyn nigdy nie została Mistrzem Niemiec?",
        answers: ["Werder Brema", "Hertha Berlin", "Bayer 04 Leverkusen", "TSV 1860 Monachium"],
        correct: answerC,
    },
    {
        question: "Który piłkarz nie grał w MLS?",
        answers: ["David Beckham", "Lothar Matthäus", "Kaká", "Gabriel Batistuta"],
        correct: answerD,
    },
    {
        question: "Który klub ma najwięcej tytułów Mistrza Brazylii?",
        answers: ["SE Palmeiras", "Fluminense FC", "SC Corinthians", "Vasco da Gama"],
        correct: answerA,
    },
    {
        question: "Ile sezonów Sir Alex Ferguson prowadził Manchester United?",
        answers: ["20", "26", "29", "24"],
        correct: answerB,
    },
    {
        question: "Kogo Roman Abramowicz ściągnął do Chelsea najpóźniej?",
        answers: ["Joe Cole", "Juan Sebastian Veron", "Didier Drogba", "Claude Makalele"],
        correct: answerC,
    },
    {
        question: "Eredivisie to rozgrywki ligowe w ...",
        answers: ["Belgii", "Norwegii", "Finlandii", "Holandii"],
        corerct: answerD,
    },
    {
        question: "Z którego kraju pochodzi klub Vissel Kobe?",
        answers: ["Korei Południowej", "Wietnamu", "Chin", "Japonii"],
        correct: answerD,
    },
];

const recordsQuestions = [
    {
        question: "Który trener zdobył UEFA Ligę Mistrzów i Mistrzostwo Świata?",
        answers: ["Vicente del Bosque", "Carlo Ancelotti", "Luiz Felipe Scolari", "Didier Deschamps"],
        correct: answerA,
    },
    {
        question: "W którym roku Holandia zdobyła Mistrzostwo Europy?",
        answers: ["1992", "1988", "1996", "1980"],
        correct: answerB,
    },
    {
        question: "Który piłkarz nie zdobył Złotej Piłki?",
        answers: ["Andriy Shevchenko", "Micheal Owen", "Steven Gerrard", "Zinédine Zidane"],
        correct: answerC,
    },
    {
        question: "Kto nie był współgospodarzem EURO 2021?",
        answers: ["Szkocja", "Belgia", "Rosja", "Dania"],
        correct: answerB,
    },
    {
        question: "Kto ma najwięcej występów w koszulce Realu Madryt?",
        answers: ["Raúl", "Fernando Hierro", "Iker Casillas", "Guti"],
        correct: answerA,
    },
    {
        question: "Które drużyny 3-krotnie zdobyły Mistrzostwo Europy?",
        answers: ["Niemcy i Hiszpania", "Niemcy i Włochy", "Francja i Włochy", "Francja i Hiszpania"],
        correct: answerA,
    },
    {
        question: "Po kim Ronaldinho przejął numer 10 w PSG?",
        answers: ["Mikeal Arteta", "Pedro Pauleta", "Nicolas Anelka", "Jay-Jay Okocha"],
        correct: answerD,
    },
];

let questions = [];

// Obsługa kliknięć na przyciskach kategorii
worldCupBtn.addEventListener("click", function() {
    categoryTitle.textContent = "Mistrzostwa Świata"; // zmienia tytuł kategorii
    runQuestion(worldCupQuestions); // wyświetla pytanie
});
    
clubCupsBtn.addEventListener("click", function() {
    categoryTitle.textContent = "Klubowe Puchary";
    runQuestion(clubCupsQuestions);
});
    
leaguesBtn.addEventListener("click", function() {
    categoryTitle.textContent = "Ligi Światowe";
    runQuestion(leaguesQuestions);
});
    
recordsBtn.addEventListener("click", function() {
    categoryTitle.textContent = "Rekordy I Ciekawostki";
    runQuestion(recordsQuestions);
});
    
    // Funkcja wyświetlająca pytania
function runQuestion(questions) {
    let quest = questions[questionsIndex];
    questionNumber.textContent = indexNumber + 1 + " / " + questions.length;
    questionTag.textContent = quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0];
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1];
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2];
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3];
}
         
/*
function runQuestion() {
    let quest = questions[questionsIndex];
    questionNumber.textContent = indexNumber + 1 + " / " + questions.length;
    questionTag.textContent = quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0];
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1];
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2];
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3];
}*/

const lastQuestion = questions.length - 1;

// next question
nextQuestion.addEventListener('click', setNext)

function setNext() {
    indexNumber++; // question number
    resetClass(); // reset classes for answers
    startAndResetTimer(); // reset and start countdown again
  
    if (questionsIndex < questions.length - 1) {
      questionsIndex++;
      runQuestion(questions);
    } else {
      final();
  


        function final() {
            quizPage.style.display = "none";
            scorePage.style.display = "flex";
            scoreUser.innerHTML = user.value;
            scoreResult.innerHTML = score + "/" + questions.length; // ostatnie pytanie + strona wyników
            scorePercantage.innerHTML = Math.round(100 * score / questions.length) + "%";
        }
    }
}

let answersTag = document.querySelectorAll('.answer-btn');
const answersLen = answersContainer.children.length;

// check answers 
answersTag.forEach(function (answer) {
    answer.addEventListener('click', function () {

        if (answer === questions[questionsIndex].correct) {
            answer.classList.add('correct');
            score++; // add point
        } else {
            answer.classList.add('wrong');
            showCorrectAnswer();
        }

        function showCorrectAnswer() {
            for (let i = 0; i < answersLen; i++) {
                if (answersContainer.children[i] === questions[questionsIndex].correct) {
                    answersContainer.children[i].classList.add('correct');
                    answersContainer.children[i].classList.add('transition-time');
                }
            }
        }

        disabled(); // another answers are unclickable
        counter = 0; // pause timer
    })
})

function resetClass() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.remove('correct');
        answersContainer.children[i].classList.remove('wrong');
        answersContainer.children[i].classList.remove('transition-time');
        answersContainer.children[i].classList.remove('answered');
    }
}

function disabled() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.add('answered');
    }
}
