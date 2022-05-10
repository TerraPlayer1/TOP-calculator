const num = document.querySelectorAll(".number")
const display = document.querySelector(".screen")
const operator = document.querySelectorAll(".opr")
const calc = document.querySelector(".eval")

let preOprNum = "";
let postOprNum = "";

num.forEach(n => {
  n.addEventListener("click", function click(e){
    if(oprPresent) {
      postOprNum += n.textContent;
      display.textContent = postOprNum;
      console.log(preOprNum,postOprNum)
    } else {
    preOprNum += n.textContent;
    display.textContent = preOprNum;
    console.log(preOprNum,postOprNum)
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
  display.textContent = preOprNum = total = operate(oprType, parseFloat(preOprNum), parseFloat(postOprNum));
  postOprNum = "";
}



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