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

function isOperator(op) {

    switch (op) {
        case "+" || "-" || "*" || "/":
            return true
    
        default:
            return false
    }

}

function evaluate(elements) {
    elements.map(x => {
            switch(getPower(x)) {

        case 0:

            break;

        case 1:

            break;

        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        default:
            break;
    }
})
}
