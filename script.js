let calculatorDiv = document.querySelector('#container');

let numberOneInput = document.createElement('input');
let numberTwoInput = document.createElement('input');

let operatorInput = document.createElement('input');
let resultButton = document.createElement('button');

calculatorDiv.appendChild(numberOneInput);
calculatorDiv.appendChild(operatorInput);
calculatorDiv.appendChild(numberTwoInput);
calculatorDiv.appendChild(resultButton);

resultButton.classList.add('resultButton');
resultButton.textContent = 'Calculate';


resultButton.addEventListener ('click', function () {

    let valueOne = parseInt(numberOneInput.value);
    let valueTwo = parseInt(numberTwoInput.value);

    let result = document.createElement('p');
    
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

    calculatorDiv.appendChild(result);

})
