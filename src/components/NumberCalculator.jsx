import { useState } from "react";
import "./NumberCalculator.css"

function NumberCalculator(){

    const [display, setDisplay] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');


    const handleNumberClick = (number) => {
        setCurrentValue(currentValue + number);
        setDisplay(display + number);

    }

    const handleOperatorClick = (clickedOperator) => {
        if(currentValue && !previousValue){
            setPreviousValue(currentValue);
            setCurrentValue('');
            setOperator(clickedOperator);
            setDisplay(display + ' ' + clickedOperator + ' ');
        }
    }

    const handleClear = () => {
        setDisplay('');
        setCurrentValue('');
        setPreviousValue('');
        setOperator('');
    }

    const handleCalculate = () => {
        if(currentValue && previousValue && operator){
            const firstNumber = parseFloat(previousValue);
            const secundNumber = parseFloat(currentValue);
            let result = 0;

            switch (operator){
                case '+':
                    result = firstNumber + secundNumber;
                    break;
                case '-':
                    result = firstNumber - secundNumber;
                    break;
                case '*':
                    result = firstNumber * secundNumber;
                    break;
                case '/':
                    result = firstNumber / secundNumber;
                    break;
                default:
                    break;
            }

            setDisplay(result.toString());
            setCurrentValue(result.toString());
            setPreviousValue('');
            setOperator('');
        }
    }
    
    return (

    <div className="calculator">
        <div className="display">{display}</div>
            <div className="button-container">
                <button onClick={() => handleNumberClick('9')}>9</button>
                <button onClick={() => handleNumberClick('8')}>8</button>
                <button onClick={() => handleNumberClick('7')}>7</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>
                <button onClick={() => handleNumberClick('6')}>6</button>
                <button onClick={() => handleNumberClick('5')}>5</button>
                <button onClick={() => handleNumberClick('4')}>4</button>
                <button onClick={() => handleOperatorClick('*')}>*</button>
                <button onClick={() => handleNumberClick('3')}>3</button>
                <button onClick={() => handleNumberClick('2')}>2</button>
                <button onClick={() => handleNumberClick('1')}>1</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleNumberClick('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
            </div>
        </div>
    );
}

export default NumberCalculator;