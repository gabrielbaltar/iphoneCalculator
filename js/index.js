const resultText = document.querySelector('.number-result p');
//const firstButton = document.querySelectorAll('.first-buttons button');
const allButtons = document.querySelectorAll('button');

const buttonContainer = document.querySelectorAll('.buttons-container button');

console.log(buttonContainer);

//console.log(firstButton);
//resultText.textContent = 'Hello World';

let firstNumber = null;
let secondNumber = null;
let operator = null;

allButtons.forEach(button => {
    button.addEventListener("click", (event) => {

        const value = button.textContent;
        //console.log(value);
        
        //console.log(button.textContent);
        

       if(!isNaN(parseFloat(value))){

            if(resultText.textContent === '0' || resultText.textContent === operator || resultText.textContent === 'Error') {
                resultText.textContent = value;
                operator && (secondNumber = parseFloat(resultText.textContent));
            }else {
                resultText.textContent += value;
            }

            if(operator){
                secondNumber = parseFloat(resultText.textContent);
            }

        }else if (['+', '-', 'x', '/'].includes(value)){
            
            if(operator) {
                firstNumber.calculate(firstNumber, operator, secondNumber);
                resultText.textContent = firstNumber;
                secondNumber = null;
            }else {
                firstNumber = parseFloat(resultText.textContent);
            }

            firstNumber = parseFloat(resultText.textContent);
            operator = value;
            resultText.textContent = '0';

        }else if (value === "="){
            if(firstNumber !== null && operator !== null && secondNumber !== null) {
                resultText.textContent = calculate(firstNumber, operator, secondNumber);
                firstNumber = parseFloat(resultText.textContent);
                secondNumber = null;
                operator = null;    
            }
        }

        if(event.target.textContent === 'AC'){
            resultText.textContent = '';
            firstNumber = null;
            secondNumber = null;
            operator = null;
        }

    });

});

function calculate(number1, operator, number2){

    switch(operator){
        case '+':
            return number1 + number2;
        case '-':        
            return number1 - number2;
        case 'x':       
            return number1 * number2;
        case '/':
            if(number2 !== 0) {
                return number1 / number2;
            }else {
                return alert('Não é possível dividir por zero');
            }
        default: 
            return alert('Error');
    }
}

//Função para adicionar o hover ao clicar
/*buttonContainer.forEach(event => {
    event.addEventListener('click', () => {
        console.log("Clicou");
        event.classList.add('buttons-container-new');
    });

    setTimeout(() => {
        event.classList.remove("buttons-container-new");
    }, 300);
}); */