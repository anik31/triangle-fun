const inputs = document.querySelectorAll(".input");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");

function clickHandler(){
    var base = inputs[0].value;
    var height = inputs[1].value;
    var area = 0.5 * base * height;
    output.innerText = `Area of Triangle - ${area}`;
}

btnCalculate.addEventListener("click",clickHandler);