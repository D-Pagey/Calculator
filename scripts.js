let display = document.getElementsByClassName("display");
display = Array.from(display);
let clear = document.getElementsByClassName("clear-button");
clear = Array.from(clear);
let numBtns = document.getElementsByClassName("number-button");
numBtns = Array.from(numBtns);
let operatorBtns = document.getElementsByClassName("operator-button");
operatorBtns = Array.from(operatorBtns);
let equals = document.getElementsByClassName("nan-button")[1];

let operand1 = 0;
let operand2 = 0;
let currentState = 1;
let operator = "";

function stateSwitcher(state) {
  currentState = (state === 1 ? 2 : 1);
  return currentState;
}

function clearDisplay() {
  display[0].innerHTML = 0;
  operand1 = 0;
  operand2 = 0;
  currentState = 1;
  operator = "";
}

clear[0].addEventListener("click", clearDisplay);

for (var i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function(e) {
    createOperands(e.target);
  });
}

function createOperands(btn) {
  if (currentState == 1 && operand1 == 0) {
    operand1 = btn.getAttribute("data-value");
    display[0].innerHTML = operand1;
  }
  else if (currentState == 1) {
    operand1 += btn.getAttribute("data-value");
    display[0].innerHTML = operand1;
  }
  else if (currentState == 2 && operand2 == 0) {
    operand1 = btn.getAttribute("data-value");
    display[0].innerHTML = operand2;
  }
  else {
    operand2 += btn.getAttribute("data-value");
    display[0].innerHTML = operand2;
  }
};

for (var j = 0; j < operatorBtns.length; j++) {
  operatorBtns[j].addEventListener("click", function(e) {
    operatorInput(e.target);
  })
}

function operatorInput(btn) {
  operator += btn.getAttribute("data-value");
  console.log(operator);
}

equals.addEventListener("click", function(e) {
  evaluate(e.target);
});

function evaluate(btn) {
  console.log(btn);
  stateSwitcher(currentState);
  console.log(operand1);
  console.log(operand2);
}

// function to handle buttons

/* problems

1) how to pass argument to event listener function
2) can pass index within function to new function? e.g. test().

To understand:
Event object passed into event listeners
data attributes
attach info to buttons/elemtns
get attributes
html data attributes
e.target
e
eval function

*/
