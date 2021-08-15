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
    if(angles[0].value == ""){
        output.innerText = "Enter angle-1.";
        output.style.color = "red";
    }else if(angles[1].value == ""){
        output.innerText = "Enter angle-2.";
        output.style.color = "red";
    }else if(angles[2].value == ""){
        output.innerText = "Enter angle-3.";
        output.style.color = "red";
    }else{
        if (calculateSum() == 180){
            output.innerText = "It's a triangle.";
            output.style.color = "green";
        }
        else{
            output.innerText = "It's not a triangle.";
            output.style.color = "red";
        }
    }
}

btnCheck.addEventListener("click",clickHandler)