class MathOp {
    constructor () {
        this.opList = new Array()
        this.expList = new Array()
    }

    getPower(element) {
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

    isOperator(op) {

    switch (op) {
        case "+" || "-" || "*" || "/":
            return true
    
        default:
            return false
    }

}

    getLastOp(){
    if (this.opList.length == 0){
        return null
    }
    return this.opList[this.opList.length]
}
//  elements is a list of expression operators
    convertPostFix(elements) {
        elements.map(x => {
            switch(this.getPower(x)) {

        case 0:
            this.expList.push(x)
            break;

        case 1:
            while (this.opList.length > 0 && (this.getPower(this.getLastOp()) >= 1)) {
                let top = this.opList.pop()
                if (top != "(") {
                    this.expList.push(top)       
                }
            }
            this.opList.push(x)
            break;

        case 2:
            while (this.opList.length > 0 && (this.getPower(this.getLastOp()) >= 2)) {
                this.expList.push(this.opList.pop())
            }
            this.opList.push(x)
            break;

        case 3:
            this.opList.push(x)
            break;

        case 4:

            while(this.opList[this.opList.length - 1] != "("){
                this.expList.push(this.opList.pop())
                if (this.opList.length == 0){
                    break
                }   
            }
            this.opList.pop() //remove left parenthesis
            break;

        default:
            break;
    }
})
while(this.opList.length > 0){
    if (this.opList.length == 0){
        break
    }
    this.expList.push(this.opList.pop())

}
console.log(this.expList)
    }
   
}

let testList = ["5" , "+" , "6" , "*" , "(" , "3" , "-" , "4" ,")"]
    let m = new MathOp()
    m.convertPostFix(testList)
