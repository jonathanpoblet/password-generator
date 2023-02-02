import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CheckCircle, Circle, Justify } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import './App.css';

function App() {

  const [checkUpperCase,setCheckUpperCase] = useState<boolean>(false);
  const [checkLowerCase,setCheckLowerCase] = useState<boolean>(false);
  const [checkNumbers,setCheckNumbers] = useState<boolean>(false);
  const [checkSymbols,setCheckSymbols] = useState<boolean>(false);

  const letters:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numbers:number[] = [1,2,3,4,5,6,7,8,9];
  const symbols:string[] = ['|','°','!','"','#','$','%','&','/','(',')','=','?','¿','¡','<','>','*','+','}',']','{','['];


  function createPassword():void {
    
  }
  
  return (
    <div className='app'>
      <div className='password'>
        <h1 className='password-title'>Password Generator</h1>
        <div className='password-generated'>
          <span className='password-generated-pass'></span>
          <CopyToClipboard text='hello'>
            <Justify className='password-generated-copy'/>
          </CopyToClipboard>
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Password length</label>
          <input className='password-container-input' type='number' defaultValue='8'/>
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Include uppercase letters</label>
          {
            !checkUpperCase ? 
            <Circle
              onClick={() => setCheckUpperCase(!checkUpperCase)}
              className='password-container-icon'/>
            :
            <CheckCircle
              onClick={() => setCheckUpperCase(!checkUpperCase)}
              className='password-container-icon'/>
          }
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Include lowercase letters</label>
          {
            !checkLowerCase ? 
            <Circle
              onClick={() => setCheckLowerCase(!checkLowerCase)}
              className='password-container-icon'/>
            :
            <CheckCircle
              onClick={() => setCheckLowerCase(!checkLowerCase)}
              className='password-container-icon'/>
          }
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Include numbers</label>
          {
            !checkNumbers ? 
            <Circle
              onClick={() => setCheckNumbers(!checkNumbers)}
              className='password-container-icon'/>
            :
            <CheckCircle
              onClick={() => setCheckNumbers(!checkNumbers)}
              className='password-container-icon'/>
          }
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Include symbols</label>
          {
            !checkSymbols ? 
            <Circle
              onClick={() => setCheckSymbols(!checkSymbols)}
              className='password-container-icon'/>
            :
            <CheckCircle
              onClick={() => setCheckSymbols(!checkSymbols)}
              className='password-container-icon'/>
          }
        </div>
        <button className='password-button-generate'>GENERATE PASSWORD</button>
      </div>
    </div>
  )
}

export default App;
