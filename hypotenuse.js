const lengthSides = document.querySelectorAll(".length-sides");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");

function clickHandler(){
    var sideA = lengthSides[0].value;
    var sideB = lengthSides[1].value;
    var hypotenuse = Math.sqrt((sideA * sideA) + (sideB * sideB));
    output.innerText = `Hypotenuse length - ${hypotenuse}`;
}

btnCalculate.addEventListener("click",clickHandler);