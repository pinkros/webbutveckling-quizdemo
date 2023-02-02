class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const qList = document.querySelector("#questions");

const scoreDisplay = document.querySelector("#score-value");

let scoreValue = 0;

const questions = [];

async function startBtnClick() {
  scoreValue = 0;
  scoreDisplay.innerText = scoreValue;

  const url = new URL(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean`
  );

  const response = await fetch(url);
  if (response.status === 200) {
    const jsonResponse = await response.json();
    questions.splice(0, questions.length);

    for (const result of jsonResponse.results) {
      questions.push(new Question(result.question, result.correct_answer));
    }

    while (qList.childElementCount > 0) {
      qList.children[0].remove();
    }

    displayQuestions();
  }
}

function displayQuestions() {
  for (const question of questions) {
    //Skapa element
    const card = document.createElement("li");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardText = document.createElement("h4");
    const cardFooter = document.createElement("div");
    const trueBtn = document.createElement("button");
    const falseBtn = document.createElement("button");

    //styla elemnet
    card.classList.add("card", "border-0", "mb-2");
    cardHeader.classList.add("card-header", "bg-info", "fw-bold");
    cardBody.classList.add("card-body", "bg-dark", "text-warning");
    cardText.classList.add("card-text");
    cardFooter.classList.add("card-footer", "bg-info");
    trueBtn.classList.add(
      "btn",
      "btn-success",
      "border-3",
      "border-dark",
      "mx-1"
    );
    falseBtn.classList.add(
      "btn",
      "btn-danger",
      "border-3",
      "border-dark",
      "mx-1"
    );
    //innehåll i element
    cardHeader.innerText = questions.indexOf(question) + 1;
    cardText.innerText = question.statement;
    trueBtn.innerText = "True";
    falseBtn.innerText = "False";

    //events
    trueBtn.onclick = () => {
      guessBtnClick(question, cardBody, falseBtn, trueBtn, "True");
    };

    falseBtn.onclick = () => {
      guessBtnClick(question, cardBody, falseBtn, trueBtn, "False");
    };

    //lägga till element i dom
    cardBody.append(cardText);
    cardFooter.append(trueBtn, falseBtn);
    card.append(cardHeader, cardBody, cardFooter);
    qList.appendChild(card);
  }
}

function guessBtnClick(question, cardBody, falseBtn, trueBtn, guess) {
  if (question.correctAnswer === guess) {
    scoreValue++;
    scoreDisplay.innerText = scoreValue;
    cardBody.classList.remove("bg-dark", "text-warning");
    cardBody.classList.add("bg-success", "text-light");
  } else {
    cardBody.classList.remove("bg-dark", "text-warning");
    cardBody.classList.add("bg-danger", "text-light");
  }

  trueBtn.disabled = true;
  falseBtn.disabled = true;
}
