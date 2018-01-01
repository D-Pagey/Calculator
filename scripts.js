const display = document.getElementsByClassName("display");
let numBtns = document.getElementsByClassName("number-button");
numBtns = Array.from(numBtns);
const numbers = numBtns.map(numBtn => numBtn.innerHTML);
// 
// 1) Create function to add event listener to one button
// 2) Loop through array to add event listener to all buttons
