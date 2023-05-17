// Define the quiz questions and answers
const quizData = [
    {
      question: "Who is the CEO of Apple Inc.?",
      options: ["Tim Cook", "Jeff Bezos", "Satya Nadella", "Mark Zuckerberg"],
      answer: "Tim Cook"
    },
    // Add more questions here...
  ];
  
  // Function to shuffle the quiz questions
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to generate the quiz HTML
  function generateQuiz() {
    shuffle(quizData); // Shuffle the questions
  
    const quizContainer = document.getElementById("quiz");
    let score = 0;
  
    quizData.forEach((quizItem, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-container");
  
      const questionElement = document.createElement("h3");
      questionElement.innerHTML = `${index + 1}. ${quizItem.question}`;
  
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options-container");
  
      quizItem.options.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.classList.add("option");
        optionElement.innerHTML = option;
        optionElement.addEventListener("click", () => {
          if (option === quizItem.answer) {
            score++;
            optionElement.classList.add("correct");
          } else {
            optionElement.classList.add("wrong");
          }
          disableOptions();
        });
        optionsContainer.appendChild(optionElement);
      });
  
      questionContainer.appendChild(questionElement);
      questionContainer.appendChild(optionsContainer);
      quizContainer.appendChild(questionContainer);
    });
  
    // Function to disable options after an answer is clicked
    function disableOptions() {
      const options = document.querySelectorAll(".option");
      options.forEach((option) => {
        option.disabled = true;
        if (option.innerHTML === quizData[index].answer) {
          option.classList.add("correct");
        }
      });
  
      if (index + 1 === quizData.length) {
        showScore();
      } else {
        showNextQuestion();
      }
    }
  
    // Function to show the next question
    function showNextQuestion() {
      setTimeout(() => {
        quizContainer.innerHTML = "";
        index++;
        generateQuiz();
      }, 1000);
    }
  
    // Function to display the final score
    function showScore() {
      setTimeout(() => {
        quizContainer.innerHTML = "";
        const scoreElement = document.createElement("h2");
        scoreElement.innerHTML = `Your Score: ${score}/${quizData.length}`;
        quizContainer.appendChild(scoreElement);
      }, 1000);
    }
  }
  
  // Generate the quiz when the page loads
  generateQuiz();
  