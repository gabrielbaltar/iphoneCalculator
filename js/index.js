const resultText = document.querySelector('.number-result p');
//const firstButton = document.querySelectorAll('.first-buttons button');
const allButtons = document.querySelectorAll('button');
console.log(resultText);

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
        resultText.textContent += event.target.textContent;
        
        if(event.target.textContent === 'AC'){
            resultText.textContent = '';
        }

       if(!isNaN(parseFloat(value))){
            console.log('Number');
            if(resultText.textContent === 'O' || resultText.textContent === '/' || resultText.textContent === '*' || resultText.textContent === '+' || resultText.textContent === '-'){
                resultText.textContent = value;
                operator && (secondNumber = parseFloat(resultText.textContent));
            }else {
                //resultText.textContent += value;
            }
        }
       

        
    });

    
});
