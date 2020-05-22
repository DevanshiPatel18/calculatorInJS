const calculatorScreen= document.querySelector('.calculator_screen')

const updateScreen=(number)=>{
  calculatorScreen.value=number
}
const inputNumber= (number)=>{
  if (currentInput==='0'){
    currentInput=number
  }
  else
  {
  currentInput += number
}
}
const inputDecimal=(number)=>{
  currentInput +='.'
}
//numbers
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
  number.addEventListener("click",(event)=>{
    inputNumber(event.target.value);
    updateScreen(currentInput)
  })
})
let prevInput='0'
let calculationOperator=''
let currentInput='0'

const decimal=document.querySelectorAll(".decimal")
decimal.forEach((number)=>{
  number.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentInput)
  })
})

//operetor
const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=>{
  operator.addEventListener("click",(event)=>{
    inputOperator(event.target.value);

  })
})
const inputOperator=(operator) =>{
  prevInput=currentInput
  calculationOperator=operator
  currentInput='0'
}

const equalSign=document.querySelector('.equal')

equalSign.addEventListener("click",()=>{
  calculate()
  updateScreen(currentInput)
})
let result=0
const calculate = () => {

  switch(calculationOperator){
    case '+': result= parseFloat(prevInput) + parseFloat(currentInput)
      break
    case '-': result= parseFloat(prevInput) - parseFloat(currentInput)
      break
    case '*': result= parseFloat(prevInput) * parseFloat(currentInput)
      break
    case '/': result= parseFloat(prevInput) / parseFloat(currentInput)
     break
     default:
     return

  }
  currentInput=result.toString()
  calculationOperator=''
}

const clearBtn=document.querySelector('.clear')

clearBtn.addEventListener('click',()=>{
  clearAll()
  updateScreen(currentInput)
})

const clearAll=()=>{
  prevInput='0'
  calculationOperator=''
  currentInput='0'
}
