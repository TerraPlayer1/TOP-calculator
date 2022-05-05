const num = document.querySelectorAll(".number");
const display = document.querySelector(".curr");
const operator = document.querySelectorAll(".opr");
const calc = document.querySelector(".eval");
const allClear = document.querySelector(".clear");
const clearEntry = document.querySelector(".sClear")
const dec = document.querySelector(".dec");
const mod = document.querySelector(".mod");
const prev = document.querySelector(".prev")

let firstNum = "";
let secNum = "";
num.forEach(n => {
  n.addEventListener("click", function click(e){
    if(oprPresent) {
      secNum += n.textContent;
      display.textContent = secNum;
    } else {
    firstNum += n.textContent;
    display.textContent = firstNum;
    };
  });
});

let oprPresent = false;
let oprType = "";
operator.forEach(o => {
  o.addEventListener("click", function() {
    oprInput(o.textContent);
  });
});


let total = 0;
calc.addEventListener("click", equal);

calc.addEventListener("click", function(){ //Display number in prev
prev.textContent = `= ${total}`
});

allClear.addEventListener("click", clear);

clearEntry.addEventListener("click", sClear);

mod.addEventListener("click", modify);

let regex = /([.])/; 
dec.addEventListener("click", decimal);

let regex2 = /([0-9])/;
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if(regex2.test(e.key)){ //If key is num exec this
    if (oprPresent) {
      display.textContent = secNum += e.key; 
    } else display.textContent = firstNum += e.key;
  };

  if(e.key === "*" || e.key === "x"){
    oprInput("*");
  } else if(e.key === "-"){
    oprInput("-");
  } else if(e.key === "+"){
    oprInput("+");
  } else if(e.key === "/"){
    oprInput("/");
  } else if(e.key === "Enter" || e.key === "="){
    oprInput("=");
  } else if(e.key === "."){
    decimal();
  } else if(e.key === "Escape"){
    clear();
  } else if(e.key === "Backspace"){
    sClear();
  };
});


function add(a, b){
  return a+b;
};
function subtract(a, b){
  return a-b;
};
function multiply(a, b){
  return a*b;
};
function divide(a, b){
  return a/b;
};

function calculate(opr, num1, num2) {
  return opr === "-" ? subtract(num1, num2)
        :opr === "*" ? multiply(num1, num2)
        :opr === "/" ? divide(num1, num2)
        :add(num1, num2)
};
function oprInput(opr){

  if(!firstNum){
    // Do nothing
  } else if(firstNum){ // Move on to writing second number
    oprPresent = true;
  };
  if(oprType){
    equal();
  };
  oprType = opr;
  prev.textContent = firstNum;
  prev.textContent += ` ${oprType}`;
};
function decimal(){ 
  if(oprPresent && !regex.test(secNum)) {
    secNum === "" ? secNum += "0." : secNum += ".";
    display.textContent = secNum;
  } else if(!regex.test(firstNum) && !regex.test(secNum)){
    firstNum === "" ? firstNum += "0." : firstNum += ".";
    display.textContent = firstNum;
  };
};
function equal(){
  if(!firstNum || !secNum){ // If both numbers are not present, don't proceed
  } else if(firstNum === "0" || secNum=== "0") {
    display.textContent = "Stop right there, criminal scum! Nobody breaks the law on my watch!"
  } else {
    total = calculate(oprType, parseFloat(firstNum), parseFloat(secNum));
    display.textContent = firstNum = Math.round((total + Number.EPSILON) * 100) / 100;
    secNum = "";
  };
};
function clear(){
  firstNum = secNum = oprType = "";
  total = 0;
  oprPresent = false;
  display.textContent = prev.textContent = "0";
};
function sClear(){
  if(oprPresent){
    secNum = display.textContent = secNum.slice(0, -1);
  } else {
    firstNum = display.textContent = firstNum.slice(0, -1)
  };
};
function modify(){
    display.textContent == firstNum ? display.textContent = firstNum = display.textContent *= -1
    :display.textContent == secNum ? display.textContent = secNum = display.textContent *= -1
    :display.textContent == total ? display.textContent = total = display.textContent *= -1
    : alert('How did you get this?')
};
