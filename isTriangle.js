const angles = document.querySelectorAll(".input-angle");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function calculateSum(){
    var sum =0;
    angles.forEach(angle=>{
        sum += Number(angle.value);
    })
    return sum;
}

function clickHandler(){
    if (calculateSum() == 180){
        output.innerText = "It's a triangle.";
    }
    else{
        output.innerText = "It's not a triangle.";
    }
}

btnCheck.addEventListener("click",clickHandler)