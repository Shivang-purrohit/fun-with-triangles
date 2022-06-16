const sides = document.querySelectorAll(".sides") 
const btnTriangle = document.querySelector("#button")
const showOutput = document.querySelector("#output")


function calculateSum(a, b, c){
    const sumOfAngles = a + b + c ;
    return sumOfAngles;
    
}

function isTriangle(){
    const sumOfAngles = calculateSum(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value));
    if (sumOfAngles === 180){
        showOutput.innerText = "YES , this is triangle" 
    }
    else{
        showOutput.innerText = "NO , this is not triangle" 
    }

}

btnTriangle.addEventListener("click", isTriangle )

