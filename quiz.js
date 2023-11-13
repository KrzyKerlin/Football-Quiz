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

// mix up the order of questions
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

    shuffleQuestions(questions);
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
      showCorrectAnswer();
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
        correct: answerA,
    },
    {
        question: "Kto zagrał w finale mundialu w 2006 roku?",
        answers: ["Francja-Brazylia", "Włochy-Francja", "Brazylia-Niemcy", "Hiszpania-Holandia"],
        correct: answerB,
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
        correct: answerB,
    },
    {
        question: "Kto strzelił decydującego karnego w finale mundialu 2022 roku?",
        answers: ["Lionel Messi", "Nicolas Otamendi", "Gonzalo Montiel" , "Marcos Acuña"],
        correct: answerC,
    },
    {
        question: "Kto strzelił najwięcej bramek na jednym mundialu?",
        answers: ["Sandor Kocsis", "Gerd Mueller", "Just Fontaine" , "Ferenc Puskás"],
        correct: answerC,
    },
    {
        question: "Na których z wymienionych mistrzostw padło najwięcej bramek?",
        answers: ["RPA 2010 rok", "Francja 1998 rok", "USA 1994 rok" , "Rosja 2018 rok"],
        correct: answerA,
    },
    {
        question: "W którym mieście został rozegrany finał w 1994 roku?",
        answers: ["Rzym", "Ciudad de México", "Johannesburg" , "Pasadena"],
        correct: answerD,
    },
    {
        question: "Która reprezentacja wystąpiła na mundialu?",
        answers: ["Belize", "Malta", "Dominika" , "Jamajka"],
        correct: answerD,
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
        correct: answerA,
    },
    {
        question: "W którym roku Manchester City wygrał Ligę Mistrzów?",
        answers: ["2020", "2021", "2022", "2023"],
        correct: answerD,
    },
    {
        question: "Liga Konferencji to klubowe rozgrywki?",
        answers: ["W Azji", "W Afryce", "W Europie", "W Ameryce Północnej"],
        correct: answerC,
    },
    {
        question: "Klub, który może zagrać w CAF Champions League to?",
        answers: ["Al-Sadd SC", "Boca Juniors", "Al Ahly", "Sydney FC "],
        correct: answerC,
    },
    {
        question: "Który piłkarz nie wygrał Ligi Mistrzów?",
        answers: ["Frank Lampard", "Gianluigi Buffon", "Sergio Ramos", "Marcel Desailly"],
        correct: answerB,
    },
    {
        question: "Który klub wygrał najwięcej razy Copa Libertadores?",
        answers: ["Santos", "Olimpia", "Colo-Colo", "Independiente"],
        correct: answerD,
    },
    {
        question: "Które rozgrywki zastąpiły Puchar UEFA?",
        answers: ["Liga Europy", "Liga Narodów", "Puchar Zdobywców Pucharów", "Puchar Sołtysa"],
        correct: answerA,
    },
];

const leaguesQuestions = [
    {
        question: "W których sezonach Napoli zdobyło Mistrzostwo Włoch?",
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
        question: "Eredivisie to rozgrywki ligowe w ...",
        answers: ["Belgii", "Norwegii", "Finlandii", "Holandii"],
        correct: answerD,
    },
    {
        question: "Kto najczęściej uczestniczył w rozgrywkach o mistrzostwo Francji?",
        answers: ["Lens", "Olympique Lyon", "Olympique Marsylia", "Monaco"],
        correct: answerC,
    },
    {
        question: "Z którego kraju pochodzi klub Vissel Kobe?",
        answers: ["Korei Południowej", "Wietnamu", "Chin", "Japonii"],
        correct: answerD,
    },
    {
        question: "Jaka jest inna nazwa Primera División?",
        answers: ["La Liga", "Jupiler League", "Primeira Liga", "MLS"],
        correct: answerA,
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
        question: "Gdzie nie odbyły się mecze EURO 2021?",
        answers: ["Szkocja", "Belgia", "Rosja", "Dania"],
        correct: answerB,
    },
    {
        question: "Ile lat skończył w 2023 roku zawodnik Kazuyoshi Miura?",
        answers: ["50", "53", "56", "59"],
        correct: answerC,
    },
    {
        question: "Kto ma najwięcej występów w koszulce Realu Madryt?",
        answers: ["Raúl", "Fernando Hierro", "Iker Casillas", "Guti"],
        correct: answerA,
    },
    {
        question: "Po kim Ronaldinho przejął numer 10 w PSG?",
        answers: ["Mikeal Arteta", "Pedro Pauleta", "Nicolas Anelka", "Jay-Jay Okocha"],
        correct: answerD,
    },
    {
        question: "Najwięcej zwycięstw w Pucharze Narodów Afryki ma?",
        answers: ["Nigeria", "Tunezja", "Egipt", "Senegal"],
        correct: answerC,
    },
    {
        question: "Który piłkarz ma najwięcej rozegranych spotkań w Premier League?",
        answers: ["Alan Shearer", "Gareth Barry", "Tony Adams", "Mark le Tissier"],
        correct: answerB,
    },
    {
        question: "Które drużyny 3-krotnie zdobyły Mistrzostwo Europy?",
        answers: ["Niemcy i Hiszpania", "Niemcy i Włochy", "Francja i Włochy", "Francja i Hiszpania"],
        correct: answerA,
    },
];

let questions = [];

// Handling clicks on category buttons
worldCupBtn.addEventListener("click", function() {
    categoryTitle.textContent = "Mistrzostwa Świata"; // changes the category title
    runQuestion(worldCupQuestions); // displays a question
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
    
// run questions and answers
function runQuestion(questions) {
    let quest = questions[questionsIndex];
    questionNumber.textContent = indexNumber + 1 + " / " + questions.length;
    questionTag.textContent = quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0];
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1];
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2];
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3];
}

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

        disabled(); // another answers are unclickable
        counter = 0; // pause timer
    })
})

function showCorrectAnswer() {
    for (let i = 0; i < answersLen; i++) {
        if (answersContainer.children[i] === questions[questionsIndex].correct) {
            answersContainer.children[i].classList.add('correct');
            answersContainer.children[i].classList.add('transition-time');
        }
    }
}

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
