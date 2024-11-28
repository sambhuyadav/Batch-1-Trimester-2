let correctAns = ["D", "B", "C", "B", "D"];

const quizForm = document.querySelector(".quiz-form");
let questions = document.querySelectorAll('.question')
const result = document.querySelector('.result')
quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userAns = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
  ];

  

  // ForEach

  let score = 0

  userAns.forEach(function(ans , index){
     if(ans===correctAns[index]){
        score = score+1
        questions[index].classList.add('correct')
        
     }
     else{
        console.log('wrong')
        questions[index].classList.add('wrong')
     }
  })

  result.classList.remove('hide')
  
result.querySelector('.score').innerText = `Your Score is ${score}/5`

});
