const num = document.querySelectorAll(".number")
const display = document.querySelector(".screen")
let disNum = "";
num.forEach(n => {
  n.addEventListener("click", function click(e){
    disNum += n.textContent;
    display.textContent = disNum;
  })
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