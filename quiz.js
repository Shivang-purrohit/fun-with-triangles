const quizForm = document.querySelector(".quiz-form")
const submitbutton = document.querySelector("#btnSubmit")
const showOutput = document.querySelector("#output")

const correctAns = ["90°", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === correctAns[index]){
            score = score + 1 ;
        }
        index = index + 1;
    }
    showOutput.innerText = "Your score is "  + score ;


}

submitbutton.addEventListener("click", calculateScore)