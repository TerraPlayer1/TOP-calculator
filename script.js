const num = document.querySelectorAll(".number")
const display = document.querySelector(".screen")
const operator = document.querySelectorAll(".opr")
const calc = document.querySelector(".eval")

let firstNum = "";
let secNum = "";

num.forEach(n => {
  n.addEventListener("click", function click(e){
    if(oprPresent) {
      secNum += n.textContent;
      display.textContent = secNum;
      console.log(firstNum,secNum)
    } else {
    firstNum += n.textContent;
    display.textContent = firstNum;
    console.log(firstNum,secNum)
    };
  });
});


let oprPresent = false;
let oprType = ""

operator.forEach(o => {
  o.addEventListener("click", function oprClick(e){
    if (oprType){
      equal();
    }
    oprPresent = true;
    oprType = o.textContent;
  });
});

let total = 0
calc.addEventListener("click", equal);

function equal(){
  display.textContent = firstNum = total = operate(oprType, parseFloat(firstNum), parseFloat(secNum));
  secNum = "";
}
// TODO: Deal with nan when equal is called with no second number present


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