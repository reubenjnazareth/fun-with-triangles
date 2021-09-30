const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-Btn");
const output = document.querySelector("#output");

const correctAnswers = ["90", "right angled", "equilateral", "acute", "isosceles"];



function calScore() {
   score = 0;
   index = 0;
   const formResults = new FormData(quizForm);
   for(let value of formResults.values()) {
     if (value === correctAnswers[index]) {
       score = score + 1;
     }
     index = index + 1;
     
   }
   output.innerText = "score: " + score;
}

submitBtn.addEventListener("click", calScore)