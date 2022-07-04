//ui elements
const btnEquals = document.getElementById('btn-equals')
const btnAdd= document.getElementById('btn-add')
const btnSubtract = document.getElementById('btn-subtract')
const btnMultiply = document.getElementById('btn-multiply')
const btnDivide = document.getElementById('btn-divide')

const numKeys = document.querySelectorAll('.btn')
const display = document.getElementById('display')

let displayValue=0

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



const numkeyHandler = (e) => {
    console.log('Numkey Handler',e.target.innerText)
    displayValue+=e.target.innerText
    updateDisplay()
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


const updateDisplay=()=>{
    display.innerText=displayValue
}
// Initialize everything
const startCalculator=() => {
    console.log('Calculator 0.1 started')

    updateDisplay()
    console.log(numKeys)
    numKeys.forEach(btn => {
        btn.addEventListener('click',numkeyHandler)
    });

}


startCalculator()