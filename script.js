let calculatorSection = document.querySelector('#calculator')
let calculatorDiv = document.querySelector('#container');
let resultDiv = document.createElement('div');
let historicDiv = document.createElement('div');

let numberOneInput = document.createElement('input');
let numberTwoInput = document.createElement('input');
let operatorInput = document.createElement('input');
let resultButton = document.createElement('button');

let plusOneButton = document.createElement('button');
let cleanButton = document.createElement('button');

resultDiv.classList.add('result');
operatorInput.classList.add('operatorInput');
numberOneInput.classList.add('numberInput');
numberTwoInput.classList.add('numberInput');
resultButton.classList.add('resultButton');
plusOneButton.classList.add('plusOneButton');
cleanButton.classList.add('cleanButton');


calculatorDiv.appendChild(numberOneInput);
calculatorDiv.appendChild(operatorInput);
calculatorDiv.appendChild(numberTwoInput);
calculatorDiv.appendChild(resultButton);
calculatorDiv.appendChild(plusOneButton);
calculatorDiv.appendChild(cleanButton);

calculatorSection.appendChild(resultDiv);
calculatorSection.appendChild(historicDiv);

resultButton.textContent = 'Calculate';
cleanButton.textContent = 'C';
plusOneButton.textContent = '+1';

let calculator = {
    calculo: function () {
        let valueOne = parseInt(numberOneInput.value);
        let valueTwo = parseInt(numberTwoInput.value);

        cleanPage();

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

function cleanPage() {
    resultDiv.innerHTML = "";
}


resultButton.addEventListener('click', calculator.calculo);
cleanButton.addEventListener('click', cleanPage);
cleanButton.addEventListener('click', function () {
    numberOneInput.value = '';
    numberTwoInput.value = '';
    operatorInput.value = '';
})