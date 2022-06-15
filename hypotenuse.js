const sidesInput = document.querySelectorAll(".sides")
const btnCalculate = document.querySelector("#btn-cal")
const outputShow = document.querySelector("#output-msg")


function calculateSum(a, b) {
    const sumOfsides = a*a + b*b;
    return sumOfsides ;

}
 
function calculateHypo(){
    const sumOfsides = calculateSum(Number(sidesInput[0].value), Number(sidesInput[1].value));
    const lengthOfHypo = Math.sqrt(sumOfsides);
    outputShow.innerText = "the length of Hypotenuse is " + lengthOfHypo ;
}

btnCalculate.addEventListener("click" , calculateHypo);
