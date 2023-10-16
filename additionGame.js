let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput")
let gameResultElement = document.getElementById("gameResult");
let failureMessage = "Please Try Again!"
let successMessage = "Congratulations! You got it right."

function restartButton() {
    let firstNumberValue = Math.ceil(Math.random() * 100);
    let secondNumberValue = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstNumberValue;
    secondNumberElement.textContent = secondNumberValue;
    userInputElement.value = "";
    gameResultElement.textContent = ""
}

function checkButton() {
    let firstNumberInteger = parseInt(firstNumberElement.textContent);
    let secondNumberInteger = parseInt(secondNumberElement.textContent);
    let gameResult = parseInt(userInputElement.value);
    let finalResult = firstNumberInteger + secondNumberInteger;
    if (gameResult === finalResult) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.color = "white";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = failureMessage;
        gameResultElement.style.color = "white";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}