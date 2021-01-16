let calculatorDiv = document.querySelector('#container');
let resultDiv = document.createElement('div');
resultDiv.classList.add('result');
let historicDiv = document.createElement('div');

let numberOneInput = document.createElement('input');
let numberTwoInput = document.createElement('input');
let operatorInput = document.createElement('input');
let resultButton = document.createElement('button');

calculatorDiv.appendChild(numberOneInput);
calculatorDiv.appendChild(operatorInput);
calculatorDiv.appendChild(numberTwoInput);
calculatorDiv.appendChild(resultButton);
calculatorDiv.appendChild(resultDiv);
calculatorDiv.appendChild(historicDiv);

resultButton.classList.add('resultButton');
resultButton.textContent = 'Calculate';

let calculator = {
    calculo : function(){
        let valueOne = parseInt(numberOneInput.value);
        let valueTwo = parseInt(numberTwoInput.value);
    
        resultDiv.innerHTML = "";
        let result = document.createElement('p');
        result.classList.add('result');
        resultDiv.appendChild(result);
        
        let operator = operatorInput.value;
    
        if (operator == "+") {
    
            let resultCase = valueOne + valueTwo;
            result.textContent = resultCase;
        }
    
        if (operator == "-") {
    
            let resultCase = valueOne - valueTwo;
            result.textContent = resultCase;
        }
    
        if (operator == "/") {
    
            let resultCase = valueOne / valueTwo;
            result.textContent = resultCase;
        }
    
        if (operator == "*") {
    
            let resultCase = valueOne * valueTwo;
            result.textContent = resultCase;
        }
    
    }
}

function historic(){
    
}

resultButton.addEventListener ('click', calculator.calculo);
