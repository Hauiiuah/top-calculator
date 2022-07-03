

// Math operations
const add=(num1, num2) => {
     return num1 + num2
}

const subtract = (num1,num2) =>{
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1* num2
}

const divide = (num1, num2) => {
    return num2===0? "DIVISION WITH ZERO" : num1/num2
}



//Organization

const operate = (op, num1, num2) =>
{
    switch(op){
        case "+":{
            return add(num1,num2)
        }
        case "-":{
            return subtract(num1,num2)
        }
        case "*":{
            return multiply(num1,num2)
        }
        case "/":{
            return divide(num1,num2)
        }
    }
}


// Initialize everything
const startCalculator=() => {
    console.log('Calculator 0.1 started')
}


startCalculator()