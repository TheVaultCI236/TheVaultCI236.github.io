(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Print the data type integer 5 ?",
      answers: {
        a: "int a = 5;",
        b: "int 5;",
        c: "int 5 = a;"
      },
      correctAnswer: "a"
    },
    {
      question: "How do you comment a single line?",
      answers: {
        a: "/",
        b: "/*",
        c: "//"
      },
      correctAnswer: "c"
    },
    {
      question: "What data type is a word?",
      answers: {
        a: "String",
        b: "float",
        c: "Boolean",
      },
      correctAnswer: "a"
    },
	    {
     question: "Print Hello World?",
      answers: {
        a: "System.out.println(Hello World)",
        b: "System.out.println'Hello World'",
        c: "System.out.println(\"Hello World\")"
      },
      correctAnswer: "c"
   
    },
	    {
      question: "Add 5 and 2?",
      answers: {
        a: "int a = 5; int c =2; ac = a + c;",
        b: "a = 5; c =2; ac = a + 2;",
        c: "int a = 6; int c =2; ac = a + c;",
      },
      correctAnswer: "a"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

/*var input = parseInt(window.prompt("Enter a number", "Enter here"));
var input2 = parseInt(window.prompt("Guess its square now in 5 tries"));

var tries = 1;
do {
  if (input2 == input * input) {
    alert("Good!");
    break;
  } else {
    prompt("Wrong, enter again!");
  }
} while (++tries < 5);
*/




// ANSWER BOXXXX

function correct(answer){
 //do whatever you want
}
let my_answerboc=document.querySelector("#answerbox")
let my_status_textbox = document.querySelector("#my_status_text_box") // matches element with id #my_status_text_box
let button = document.querySelector("Button#yourButton") //<button id="yourButton"/>
button.addEventListener('click',()=>{
    if(correct(my_answerbox.textcontent)){
        my_status_textbox.textContent="correct!"
    }
    else my_status_textbox.textContent="incorrect!"
})