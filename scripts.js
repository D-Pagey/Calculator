/**
 * Selectors
 */
const display = Array.from(document.getElementsByClassName("display"));
const clear = Array.from(document.getElementsByClassName("clear-button"));
const numBtns = Array.from(document.getElementsByClassName("number-button"));
const operatorBtns = Array.from(document.getElementsByClassName("operator-button"));
const equals = Array.from(document.getElementsByClassName("nan-button"));

/**
 * Variables
 */
let operand1 = 0;
let operand2 = 0;
let currentState = 1;
let operator = "";
let answer = "";

/**
 * Methods
 */
 function clearDisplay() {
   display[0].innerHTML = 0;
   operand1 = 0;
   operand2 = "";
   currentState = 1;
   operator = "";
   answer = "";
 }

 function stateSwitcher() {
   currentState = (currentState === 1 ? 2 : 1);
   return currentState;
 }

 function createOperands(event) {
   if (currentState == 1 && operand1 == 0 || currentState == 1 && operand1 === answer) {
     operand1 = event.target.getAttribute("data-value");
     display[0].innerHTML = operand1;
   }
   else if (currentState == 1) {
     operand1 += event.target.getAttribute("data-value");
     display[0].innerHTML = operand1;
   }
   else if (currentState == 2 && operand2 == "") {
     operand2 = event.target.getAttribute("data-value");
     display[0].innerHTML = operand2;
   }
   else {
     operand2 += event.target.getAttribute("data-value");
     display[0].innerHTML = operand2;
   }
 };

 function operatorInput(event) {
   if (currentState == 1) {
     operator = event.target.getAttribute("data-value");
     stateSwitcher();
   }
   else if (currentState == 2) {
     evaluate();
     operator = event.target.getAttribute("data-value");
     stateSwitcher();
   }
 }

 function evaluate() {
   answer = eval(operand1 + operator + operand2);
   display[0].innerHTML = answer;
   stateSwitcher();
   status();
   operand1 = answer;
   operand2 = "";
   operator = "";
 }

 function status() {
   console.log("Operand 1 = " + operand1 + "\nOperator  = " + operator +
   "\nOperand 2 = " + operand2 + "\n\nAnswer    = " + answer);
 }

/**
 * Events
 */
for (var i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", createOperands);
}

for (var j = 0; j < operatorBtns.length; j++) {
   operatorBtns[j].addEventListener("click", operatorInput);
 }

clear[0].addEventListener("click", clearDisplay);

equals[1].addEventListener("click", evaluate);

/**
 * TO DO
   1) Sort decimal point
   2) Add event listeners using forEach
   3) Restyle
 */
