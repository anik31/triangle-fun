const inputs = document.querySelectorAll(".input");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");

function clickHandler(){
    var base = inputs[0].value;
    var height = inputs[1].value;
    if(base == ""){
        output.innerText = `Please enter base.`;
        output.style.color = "red";
    }else if(height == ""){
        output.innerText = `Please enter height.`;
        output.style.color = "red";
    }else{
        var area = 0.5 * base * height;
        output.innerText = `Area of Triangle - ${area} square cm`;
        output.style.color = "brown";
    }
}

btnCalculate.addEventListener("click",clickHandler);