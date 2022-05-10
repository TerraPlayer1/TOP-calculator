const num = document.querySelectorAll(".number")
const display = document.querySelector(".screen")
const operator = document.querySelectorAll(".opr")

let preOprNum = "";
let postOprNum = "";

num.forEach(n => {
  n.addEventListener("click", function click(e){
    if(oprPresent) {
      postOprNum += n.textContent;
      display.textContent = postOprNum;
    } else {
    preOprNum += n.textContent;
    display.textContent = preOprNum;
    };
  });
});

let oprPresent = false;
let oprType = ""
operator.forEach(o => {
  o.addEventListener("click",function oprClick(e){
    oprPresent = true;
    oprType = o.textContent;
  });
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