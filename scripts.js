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

/**
 * Methods
 */
 function stateSwitcher() {
   currentState = (currentState === 1 ? 2 : 1);
   return currentState;
 }

 function clearDisplay() {
   display[0].innerHTML = 0;
   operand1 = 0;
   operand2 = 0;
   currentState = 1;
   operator = "";
 }

 function createOperands(event) {
   if (currentState == 1 && operand1 == 0) {
     operand1 = event.target.getAttribute("data-value");
     display[0].innerHTML = operand1;
   }
   else if (currentState == 1) {
     operand1 += event.target.getAttribute("data-value");
     display[0].innerHTML = operand1;
   }
   else if (currentState == 2 && operand2 == 0) {
     operand2 = event.target.getAttribute("data-value");
     display[0].innerHTML = operand2;
   }
   else {
     operand2 += event.target.getAttribute("data-value");
     display[0].innerHTML = operand2;
   }
 };

 function operatorInput(event) {
   operator = event.target.getAttribute("data-value");
   stateSwitcher();
 }

 function evaluate(event) {
   console.log(operand1, operator, operand2)
   let answer = operand1 + operator + operand2
   console.log(answer);
   display[0].innerHTML = eval(answer);
   stateSwitcher();
 }

/**
 * Events
 */
clear[0].addEventListener("click", clearDisplay);

for (var i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", createOperands);
}

for (var j = 0; j < operatorBtns.length; j++) {
   operatorBtns[j].addEventListener("click", operatorInput);
 }

equals[1].addEventListener("click", evaluate);

// answer = operand1 

/*
can pass index within function to new function? e.g. test().

To understand:
Event object passed into event listeners
data attributes
attach info to buttons/elemtns
get attributes
html data attributes
e.target
e
eval function

add Keyboard shortcuts to calc?

*/
