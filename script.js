let display = "";
let firstNumber = "";
let operator = "";

function showNumber(num) {
  display += num;
  document.getElementById("display").innerText = display;
}

function setOperator(op) {
  if (display === "") return;
  firstNumber = display;
  operator = op;
  display = "";
  document.getElementById("display").innerText = "0";
}

function calculate() {
  if (display === "" || firstNumber === "") return;

  let secondNumber = display;
  let result = 0;

  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  } else if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  } else if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }

  display = result.toString();
  document.getElementById("display").innerText = display;

  firstNumber = "";
  operator = "";
}

function clearDisplay() {
  display = "";
  firstNumber = "";
  operator = "";
  document.getElementById("display").innerText = "0";
}

function backspace() {
  display = display.slice(0, -1);
  document.getElementById("display").innerText = display || "0";
}
