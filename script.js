const num = document.querySelectorAll(".number");
const display = document.querySelector(".screen");
const operator = document.querySelectorAll(".opr");
const calc = document.querySelector(".eval");
const clear = document.querySelector(".clear");
const sClear = document.querySelector(".sClear")
const dec = document.querySelector(".dec");

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
  o.addEventListener("click", function oprClick(e){
    if(!firstNum){
      // Do nothing
    } else if(firstNum){ // Move on to writing second number
      oprPresent = true;
    };
    if(oprType){
      equal();
    };
    oprType = o.textContent;
  });
});

let total = 0;
calc.addEventListener("click", equal);
function equal(){
  if(!firstNum || !secNum){ // If both numbers are not present, don't proceed
  } else if(firstNum === "0" || secNum=== "0") {
    display.textContent = "Stop right there, criminal scum! Nobody breaks the law on my watch!"
  } else {
    display.textContent = firstNum = total = operate(oprType, parseFloat(firstNum), parseFloat(secNum));
    secNum = "";
  };
};

clear.addEventListener("click", function clear(){
  firstNum = secNum = oprType = "";
  total = 0;
  oprPresent = false;
  display.textContent = "0";
});

sClear.addEventListener("click", function sClear(){
  if(oprPresent){
    secNum = display.textContent = secNum.slice(0, -1);
  } else {
    firstNum = display.textContent = firstNum.slice(0, -1)
  };
});

let regex = /([.])/; 
dec.addEventListener("click", function decimal(){ 
  if(oprPresent && !regex.test(secNum)) {
    secNum === "" ? secNum += "0." : secNum += ".";
    display.textContent = secNum;
  } else if(!regex.test(firstNum) && !regex.test(secNum)){
    firstNum === "" ? firstNum += "0." : firstNum += ".";
    display.textContent = firstNum;
  };
});

let regex2 = /([0-9])/;
document.addEventListener("keydown", (e) => {
  if (oprPresent && regex2.test(e.key)) {
    display.textContent = secNum += e.key; 
  } else if (regex2.test(e.key)) {
    display.textContent = firstNum += e.key;
  } else display.textContent = "Error 00"
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

function operate(opr, num1, num2) {
  return opr === "-" ? subtract(num1, num2)
        :opr === "*" ? multiply(num1, num2)
        :opr === "/" ? divide(num1, num2)
        :add(num1, num2)
};