const formQuiz = document.querySelector("#form-quiz");
const btnSubmit = document.querySelector("#btn-submit");
const result = document.querySelector("#result");

const answers = ["equilateral","90 degree","obtuse","3","right angled"];

function clickHandler(){
    var score = 0;
    var index = 0;
    const data = new FormData(formQuiz);
    for (var value of data.values()){
        if (value == answers[index]){
            score++
        }
        index++
    }    
    result.innerText = `Score - ${score}`;
    result.style.color = "orange";
}

btnSubmit.addEventListener("click",clickHandler);