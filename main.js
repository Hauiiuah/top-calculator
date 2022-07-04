//ui elements
const btnEquals = document.getElementById('btn-equals')
const btnAdd= document.getElementById('btn-add')
const btnSubtract = document.getElementById('btn-subtract')
const btnMultiply = document.getElementById('btn-multiply')
const btnDivide = document.getElementById('btn-divide')
const btnClear = document.getElementById('btn-clear')

const numKeys = document.querySelectorAll('.btn')
const display = document.getElementById('display')
const historyDisplay = document.getElementById('history')

let displayValue=0
let historyValue=0
let operation=''

let flush=true

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


// Key Handler

const clearKeyHandler = (e) => {
    displayValue=0
    historyValue=0
    operation =''
    flush = true
    updateHistory(0,'')
    updateDisplay(0)
}
const equalsKeyHandler = () => {
    if(operation!== '')
    {
        result=operate(operation,Number.parseFloat(historyValue),Number.parseFloat(displayValue))
        updateHistory(result,operation,displayValue)
        displayValue=0
        updateDisplay(0)
        flush=true
        operation='='
    }
}
const opKeyHandler = (e) => {

    console.log('OP KEY: ',historyValue,operation,displayValue)
    let result
    if(historyValue===0 && operation===''){
        console.log("What happened here")
        result=displayValue
        
    }
    else if(operation==='='){
        console.log('Equals preceeding')
        result = historyValue
    }
    
    else{
        console.log('Calculation ...')
        result = operate(operation,Number.parseFloat(historyValue),Number.parseFloat(displayValue))
    }
    if(operation==='')
    {
        updateHistory(result,e.target.innerText ,displayValue)
    }
    else{
        updateHistory(result,operation ,displayValue)
    }

    operation=e.target.innerText
    displayValue=0
    updateDisplay(0)
}

const numkeyHandler = (e) => {

    console.log('DisplayValue: ',displayValue)
    if(displayValue===0 && e.target.innerText !== '.' && e.target.innerText !== '0')
    {
        console.log('value = 0 and not point')
        displayValue = e.target.innerText

    }
    else if (displayValue===0 && e.target.innerText ==='0')
    {
        console.log('value = 0 and 0 pressed')
        return
    }
    else{
        console.log('else!!!')
        displayValue+=e.target.innerText

    }
    updateDisplay(displayValue)
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

const updateHistory=(value,op,disp) =>{

    if(op==='' && value ===0)   //Clear history
    {
        historyDisplay.innerText=''
        return
        
    }

    if(flush)
    {
        historyDisplay.innerText =`${value} ${op}`
        flush =false
    }
    else{
        historyDisplay.innerText=`${historyValue} ${op} ${disp} = ${value}`
    }
    historyValue=value
}
const updateDisplay=(value)=>{
    
    display.innerText=value
}
// Initialize everything
const startCalculator=() => {
    console.log('Calculator 0.1 started')

    updateDisplay(0)
    updateHistory(0,'')
    numKeys.forEach(btn => {
        btn.addEventListener('click',numkeyHandler)
    });

    //Add Click Handler
    btnClear.addEventListener('click',clearKeyHandler)
    btnAdd.addEventListener('click',opKeyHandler)
    btnSubtract.addEventListener('click',opKeyHandler)
    btnMultiply.addEventListener('click',opKeyHandler)
    btnDivide.addEventListener('click',opKeyHandler)
    btnEquals.addEventListener('click',equalsKeyHandler)

}


startCalculator()