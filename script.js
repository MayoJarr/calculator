// function toArray(key){
//     if (key != 'number') console.log("error");
//     screenNumbers.push(key);
//     console.log(screenNumbers);
// }
let screenNumbers = [];
let secondNumber = [];
let operation = "something";
let isSecondLine = false;

const display = document.querySelector(".upperDisplay");
const secondDisplay = document.querySelector(".lowerDisplay");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".reset");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".substract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
one.addEventListener("click", () => addToDisplay(1));
two.addEventListener("click", () => addToDisplay(2));
three.addEventListener("click", () => addToDisplay(3));
four.addEventListener("click", () => addToDisplay(4));
five.addEventListener("click", () => addToDisplay(5));
six.addEventListener("click", () => addToDisplay(6));
seven.addEventListener("click", () => addToDisplay(7));
eight.addEventListener("click", () => addToDisplay(8));
nine.addEventListener("click", () => addToDisplay(9));
zero.addEventListener("click", () => addToDisplay(0));
reset.addEventListener("click", () => {
    screenNumbers = [];
    display.textContent = "";
    secondNumber = [];
    secondDisplay.textContent = "";
});
equal.addEventListener("click", () =>
    operate(operation, screenNumbers, secondNumber)
);
multiply.addEventListener("click", () => {
    operation = "multiply";
    display.textContent = Number(screenNumbers.join("")) + "*";
    isSecondLine =true;
});
divide.addEventListener("click", () => (operation = "divide"));
add.addEventListener("click", () => (operation = "add"));
substract.addEventListener("click", () => (operation = "substract"));

function addToDisplay(key) {
    if (isSecondLine === false) {
        screenNumbers.push(key);
        let text = Number(screenNumbers.join(""));
        display.textContent = text;
        if (screenNumbers.length === 13) {
            console.log("full");
            screenNumbers = [];
        }
    } else if (isSecondLine === true) {
        secondNumber.push(key);
        let text2 = Number(secondNumber.join(""));
        secondDisplay.textContent = text2;
        if (secondNumber.length === 13) {
            console.log("full");
            secondNumber = [];
        }
    }
}

function operate(operation, number1, number2) {
    number1 = Number(number1.join(""));
    if (operation === "multiply") {
        display.textContent = number1 * number2;
    } else if (operation === "divide") {
        if (number2 === 0) {
            display.textContent = "ERROR";
        } else {
            display.textContent = number1 / number2;
        }
    } else if (operation === "add") {
        return number1 + number2;
    } else if (operation === "substract") {
        return number1 - number2;
    }
}
let some = "12+12";
console.log(Number(some));
/*--------------Theme switching -----------*/

// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "light-theme.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "dark-theme.css";
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "light-theme.css";
    }
});
