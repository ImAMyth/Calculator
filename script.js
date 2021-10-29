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