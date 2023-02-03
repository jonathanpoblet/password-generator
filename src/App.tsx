import { useState,useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CheckCircle, Circle, Justify } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import './App.css';

function App() {

  const [checkUpperCase,setCheckUpperCase] = useState<boolean>(false);
  const [checkLowerCase,setCheckLowerCase] = useState<boolean>(false);
  const [checkNumbers,setCheckNumbers] = useState<boolean>(false);
  const [checkSymbols,setCheckSymbols] = useState<boolean>(false);
  const [password,setPassword] = useState<string>('');
  
  const lettersUpperCase:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lettersLowerCase:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numbers:number[] = [1,2,3,4,5,6,7,8,9];
  const symbols:string[] = ['!','#','$','%','&','/','=','?','¿','¡','*','+'];
  
  function copyPassword(password:string) {
    if(password) {
      Swal.fire(`Password: ${password} copied successfully`);
      Swal.fire({
        title: `${password}`,
        text: 'Copied successfully',
        confirmButtonColor:'black'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password',
        text: 'Must generate a password',
        confirmButtonColor:'black'
      })
    }
  }

  function random(characters: (string|number)[]) : number {
    const number:number = Math.floor(Math.random() * characters.length);
    return number;
  }
  
  function createPassword():void {
    const passwordInput = document.getElementById('password-length') as HTMLInputElement;
    const passwordLenght: number = parseInt(passwordInput.value);
    const availableCharacters:(string | number)[] = [
      ...(checkUpperCase ? lettersUpperCase : []),
      ...(checkLowerCase ? lettersLowerCase : []),
      ...(checkNumbers ? numbers : []),
      ...(checkSymbols ? symbols : [])
    ];
    if (passwordLenght < 8 || passwordLenght > 20){
      Swal.fire({
        icon: 'error',
        title: 'Password Length',
        text: 'Must be between 8 to 20 characters',
        confirmButtonColor:'black'
      })
      return
    }
    if(passwordLenght >= 8 && passwordLenght <= 20 && availableCharacters.length !== 0) {
      let password: string = '';
      for(let i:number=0; i < passwordLenght; i++) {
        const randomNumber:number = random(availableCharacters);
        password += availableCharacters[randomNumber]
      }
      setPassword(password);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password Characters',
        text: 'Must include some type of characters',
        confirmButtonColor:'black'
      })
    }
  }


  useEffect(() => {
    const passwordContainer = document.getElementById('password') as HTMLSpanElement;
    passwordContainer.innerText = password
  }, [password]);

  
  
  return (
    <div className='app'>
      <div className='password'>
        <h1 className='password-title'>Password Generator</h1>
        <div className='password-generated'>
          <span className='password-generated-pass' id='password'></span>
          <CopyToClipboard text={ password } onCopy={() => copyPassword(password)}>
            <Justify className='password-generated-copy'/>
          </CopyToClipboard>
        </div>
        <div className='password-container'>
          <label className='password-container-label'>Password length</label>
          <input className='password-container-input' type='number'  defaultValue ='8' id='password-length'/>
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
        <button 
          onClick={() => createPassword()}
          className='password-button-generate'
          >
            GENERATE PASSWORD
          </button>
      </div>
    </div>
  )
}

export default App;
