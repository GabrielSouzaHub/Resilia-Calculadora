let calculatorSection = document.querySelector('#calculator')
let calculatorDiv = document.querySelector('#container');
let resultDiv = document.createElement('div');
let historicDiv = document.createElement('div');

let numberOneInput = document.createElement('input');
let numberTwoInput = document.createElement('input');
let operatorInput = document.createElement('input');
let resultButton = document.createElement('button');

let plusOneButton = document.createElement('button');
let sumButton = document.createElement('button');

resultDiv.classList.add('result');
operatorInput.classList.add('operatorInput');
numberOneInput.classList.add('numberInput');
numberTwoInput.classList.add('numberInput');
resultButton.classList.add('resultButton');
plusOneButton.classList.add('plusOneButton');
sumButton.classList.add('sumButton');


calculatorDiv.appendChild(numberOneInput);
calculatorDiv.appendChild(operatorInput);
calculatorDiv.appendChild(numberTwoInput);
calculatorDiv.appendChild(resultButton);
calculatorDiv.appendChild(plusOneButton);
calculatorDiv.appendChild(sumButton);

calculatorSection.appendChild(resultDiv);
calculatorSection.appendChild(historicDiv);

resultButton.textContent = 'Calculate';
sumButton.textContent = '+';
plusOneButton.textContent = '+1';

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
            result.textContent = "Resultado: " + resultCase;

        } else if (operator == "-") {
    
            let resultCase = valueOne - valueTwo;
            result.textContent = "Resultado: " + resultCase;

        } else if (operator == "/") {
    
            let resultCase = valueOne / valueTwo;
            result.textContent = "Resultado: " + resultCase;

        } else if (operator == "*") {
    
            let resultCase = valueOne * valueTwo;
            result.textContent = "Resultado: " + resultCase;
        
        } else {

            result.textContent = "Operador inválido";
        }
    
    }
}

function historic(){
    
}

resultButton.addEventListener ('click', calculator.calculo);
