const inputTaken = document.querySelectorAll(".inputs");
const btnCheck = document.querySelector("#btn-check");
const outputShow = document.querySelector("#output")

function calculateSides(a, b) {
    const sumOfSides = a*b*0.5 ;
return sumOfSides ;

}

function calculate() {
    const sumOfSides = calculateSides(Number(inputTaken[0].value),Number(inputTaken[1].value))
   
    outputShow.innerText = "area of triangle is " + sumOfSides ;
   
    
    

}
btnCheck.addEventListener("click" , calculate)
