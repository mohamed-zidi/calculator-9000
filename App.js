import React, { useState } from 'react';
import './App.css';
import AmazingNumberButton from './composants/AmazingNumberButton.jsx';
import BeautifulScreen from './composants/BeautifulScreen.jsx';
import GreatOperationButton from './composants/GreatOperationButton.jsx';
import ItsOverNineThousand from './composants/ItsOverNineThousand.jsx';
import MagnificientEqualButton from './composants/MagnificientEqualButton.jsx';


function Calculator() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");


  const calculateResult = () => {

    const input = text.join("");

    
    setResult(eval(input));

   
    console.log(input);
    

    setText();
  }


  const addToText = (val) => {

    val == "C" ? clear():setText((text) => [...text,val]);
    console.log(val);
  };


  const clear = () => {

    setResult(null);
    setText(null);
  }
  

  let numbersData = [9,8,7,6,5,4,3,2,1,'C',0,'.'];
  let numbers = [];
  for(let i=0; i < numbersData.length;i++){

    numbers.push(<AmazingNumberButton handleClick={addToText} number={numbersData[i]} />);
  }

  let operationsData = ['+','-','*','/'];
  let operations = [];
  for(let i=0; i<operationsData.length;i++){

    operations.push(<GreatOperationButton handleClick= {addToText} operation = {operationsData[i]} />);
  }

  
  return (
    <div className="App">

      <h1>Calculator 9000</h1>
      <BeautifulScreen text={text} result={result}></BeautifulScreen>
      <div className='divNumbers'>

        {numbers}
        
        
      </div>
      <div className='divOperations'>

        {operations}
      </div>

      <MagnificientEqualButton handleClick = {calculateResult} ></MagnificientEqualButton>

      <ItsOverNineThousand resultat = {result}/>
      
    </div>
  );
}

export default Calculator;
