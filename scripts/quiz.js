class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const qList = document.querySelector("#questions");

const questions = [
  new Question("Är jorden platt?", false),
  new Question("Kostar Lightning bolt R?", true),
  new Question("Är jiaozi goda?", true),
];
console.log(questions);

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
  cardBody.classList.add("card-body", "bg-dark");
  cardText.classList.add("card-text,", "text-warning");
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

  //lägga till element i dom
  cardBody.append(cardText);
  cardFooter.append(trueBtn, falseBtn);
  card.append(cardHeader, cardBody, cardFooter);
  qList.appendChild(card);
}

// const html = `<div class="card border-0 mb-2">
//   <div class="card-header bg-info fw-bold">1</div>
//   <div class="card-body bg-dark">
//     <h4 class="card-text text-warning">${question.statement}</h4>
//   </div>
//   <div class="card-footer bg-info">
//     <button class="btn btn-success border-3 border-dark">True</button>
//     <button class="btn btn-danger border-3 border-dark">False</button>
//   </div>
// </div>`;

//   qList.innerHTML += html;
