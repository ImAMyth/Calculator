let opList = new Array()
let expList = new Array()

function getPower(element) {
    switch (element) {
        case ")":
            return 4


        case "(":
            return 3


        case "*":
            return 2


        case "/":
            return 2

        case "+":
            return 1


        case "-":
            return 1


        default:
            return 0

    }
}