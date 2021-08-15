const lengthSides = document.querySelectorAll(".length-sides");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");

function clickHandler(){
    var sideA = lengthSides[0].value;
    var sideB = lengthSides[1].value;
    if(sideA == ""){
        output.innerText = `Please enter side-A`;
        output.style.color = "red";
    }else if(sideB == ""){
        output.innerText = `Please enter side-B`;
        output.style.color = "red";
    }else{
        var hypotenuse = Math.sqrt((sideA * sideA) + (sideB * sideB));
        output.innerText = `Hypotenuse length - ${hypotenuse} cm`;
        output.style.color = "brown";
    }
}

btnCalculate.addEventListener("click",clickHandler);