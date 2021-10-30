let number = ""
let bottomNumber = ""
let topNumber = ""
let operation = ""

let numPad = document.querySelector("#numpad-buttons")
let keyNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

keyNumbers.forEach(number => {
    let numButtons = document.createElement("button")
    // numButtons.addEventListener("click" ,)
    numButtons.textContent = number
    numButtons.value = number
    numPad.appendChild(numButtons)
})


let decimal = document.createElement("button")
decimal.textContent = "."
decimal.addEventListener("click", addDecimalHelper)
numPad.appendChild(decimal)

function addDecimalHelper() {

    if (document.querySelector(".bottom-screen").textContent.indexOf(".") == -1) {
        number += "."
        document.querySelector(".bottom-screen").textContent = number
    }
}

let negate = document.createElement("button")
negate.textContent = "+/-"
// negate.addEventListener("click" ,)
numPad.appendChild(negate)

let operatorPad = document.querySelector("#operator-buttons")
let operatorSigns = ["On", "Off", "←", "C", "-", "+", "/", "*", "^", "%", "!", "="]


operatorSigns.forEach(sign => {
    let operatorButtons = document.createElement("button")
    operatorButtons.addEventListener("click" , operate)
    operatorButtons.textContent = sign
    operatorButtons.value = sign
    operatorPad.appendChild(operatorButtons)
})

function add(a, b) {
    let sum = a + b
    console.log(sum)
}
add(10, 5)


function subtract(a, b) {
    let difference = a - b
    console.log(difference)
}
subtract(100, 25)


function multiply(a, b) {
    let product = a * b
    console.log(product);
}
multiply(50, 10)


function divide(a, b) {
    let quotient = a / b
    console.log(quotient);
}
divide(20, 5)


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
console.log(factorial(4))


function remainder(a, b) {
    let remainder = a % b
    console.log(remainder)
}
remainder(20, 5)


function power(a, b) {
    let result = Math.pow(a, b)
    console.log(result)
}
power(10, 3)

function operate() {

    switch (operation) {

        // case "On":

        //     break;

        // case "Off":

        //     break;

        // case "←":

        //     break;

        // case "C":

        //     break;

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
    }
}