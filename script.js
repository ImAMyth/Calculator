let number = ""
let bottomNumber = ""
let topNumber = ""
let operation = ""

let numPad = document.querySelector("#numpad-buttons")
let keyNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

keyNumbers.forEach(number => {
    let numButtons = document.createElement("button")
    numButtons.addEventListener("click", addNumbersToScreen)
    numButtons.textContent = number
    numButtons.value = number
    numPad.appendChild(numButtons)
})


let decimal = document.createElement("button")
decimal.textContent = "."
decimal.addEventListener("click", addDecimalHelper)
numPad.appendChild(decimal)

function addDecimalHelper() {

    if (!document.querySelector(".bottom-screen").textContent.includes('.')) {
        number += "."
        document.querySelector(".bottom-screen").textContent = number
    }
}

let negate = document.createElement("button")
negate.textContent = "+/-"
// negate.addEventListener("click",)
numPad.appendChild(negate)

function negateNumber() {

}

let operatorPad = document.querySelector("#operator-buttons")

let basicCalcButtons = ["On", "Off", "←", "C"]
basicCalcButtons.forEach(button => {
    let calcButtons = document.createElement("button")
    calcButtons.textContent = button
    calcButtons.addEventListener("click", functionalityButtons)
    operatorPad.appendChild(calcButtons)
})

function functionalityButtons(e) {
    let content = document.querySelector(".bottom-screen")
    switch (e.target.textContent) {
        case "On":
            content = 0
            break;

        case "Off":
            content = number
            break;

        case "←":
            content.textContent = content.textContent.substr(0, content.textContent.length - 1)
            break;

        case "C":
            content = 0
            break;
    }
}


let operatorSigns = ["-", "+", "/", "*", "^", "%", "!", "="]

operatorSigns.forEach(sign => {
    let operatorButtons = document.createElement("button")
    operatorButtons.textContent = sign
    operatorButtons.addEventListener("click", operate)
    operatorButtons.value = sign
    operatorPad.appendChild(operatorButtons)
})

function add(a, b) {
    let sum = a + b
    console.log(sum)
}


function subtract(a, b) {
    let difference = a - b
    console.log(difference)
}


function multiply(a, b) {
    let product = a * b
    console.log(product);
}


function divide(a, b) {
    let quotient = a / b
    console.log(quotient);
}


function factorial(num) {

    if (num < 0) {
        return -1
    }

    else if (num == 0) {
        return 1
    }
    else {
        return num * factorial(num - 1)
    }

}


function remainder(a, b) {
    let remainder = a % b
    console.log(remainder)
}


function power(a, b) {
    let result = Math.pow(a, b)
    console.log(result)
}

function operate() {

    switch (operation) {

        case "+":

            break;

        case "-":

            break;

        case "*":

            break;

        case "/":

            break;

        case "%":

            break;

        case "^":

            break;

        case "!":

            break;
    }
}

function addNumbersToScreen(e) {

    if (number.length < 16) {
        number += String(e.target.textContent)
        document.querySelector(".bottom-screen").textContent = number
    }

}

