const display = document.getElementsByClassName("display");
let numBtns = document.getElementsByClassName("number-button");
numBtns = Array.from(numBtns);

let operand1 = "";
let operand2 = "";

function test(x) {
  operand1 += x.getAttribute("data-value");
  console.log(operand1);
};

for (var i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function(e) {
    test(e.target);
  });
}

/* problems

1) how to pass argument to event listener function
2) can pass index within function to new function? e.g. test().

*/
