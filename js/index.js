const resultText = document.querySelector('.number-result p');
//const firstButton = document.querySelectorAll('.first-buttons button');
const allButtons = document.querySelectorAll('button');
console.log(resultText);

//console.log(firstButton);
//resultText.textContent = 'Hello World';

let firstNumber = 0;
let secondNumber = 0;
let operator = null;

allButtons.forEach(button => {
    button.addEventListener("click", (event) => {

        const value = button.textContent;
        //console.log(value);
        
        //console.log(button.textContent);
        resultText.textContent += event.target.textContent;
        
       if(!isNaN(parseFloat(value))){
            console.log('Number');
            if(resultText.textContent === '0' || resultText.textContent === '/' || resultText.textContent === '*' || resultText.textContent === '+' || resultText.textContent === '-'){
                resultText.textContent = value;
                
            }
        }
       

        if(event.target.textContent === 'AC'){
            resultText.textContent = '';
        }
    });

    
});
