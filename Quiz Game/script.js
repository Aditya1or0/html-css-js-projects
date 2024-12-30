const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correctAnswer: "Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: "Diamond",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(li, option);
    optionsList.appendChild(li);
  });
}

// Check if the selected option is correct
function checkAnswer(optionElement, selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  // Highlight the selected option
  optionElement.style.backgroundColor =
    selectedOption === currentQuestion.correctAnswer ? "#4CAF50" : "#f44336";

  // Disable all options after answering
  const options = document.querySelectorAll("#options li");
  options.forEach((option) => {
    option.style.pointerEvents = "none"; // Disable further clicks
  });

  // Show next button after selecting an answer
  document.getElementById("next-button").style.display = "block";
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("next-button").style.display = "none";
  } else {
    showScore();
  }
}

// Show the final score
function showScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("next-button").style.display = "none";
  const scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `Your score is: ${score} out of ${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("question-container").style.display = "block";
  document.getElementById("score-container").style.display = "none";
  displayQuestion();
  document.getElementById("next-button").style.display = "none";
}

window.onload = displayQuestion;
