let resultEl = document.getElementById("result");
let history = document.getElementById("history");

function display(val){
    resultEl.value += val; 
}
function solve(){
    let x = resultEl.value;
    let y = eval(x);
    resultEl.value = y;
    let para = document.createElement("p");
    para.classList.add("output");
    let value = x + " = " + y;
    para.textContent = value;
    history.appendChild(para);
}

function clr(){
    resultEl.value = "";
    history.removeChild(para);
}
