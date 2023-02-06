import { useState } from 'react';
import Swal from 'sweetalert2';

import './App.css';
import PasswordInputs from './components/PasswordInputs';
import PasswordViewer from './components/PasswordViewer';

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
  
  
  return (
    <div className='app'>
      <div className='app-container'>
        <h1 className='app-container-title'>Password Generator</h1>
        <PasswordViewer
          password={ password }
        />
        <PasswordInputs
          checkLowerCase={ checkLowerCase }
          checkUpperCase={ checkUpperCase }
          checkNumbers={ checkNumbers }
          checkSymbols={ checkSymbols }
          setCheckLowerCase= { setCheckLowerCase }
          setCheckUpperCase= { setCheckUpperCase }
          setCheckNumbers= { setCheckNumbers }
          setCheckSymbols= { setCheckSymbols }
        />
        <button 
          onClick={() => createPassword()}
          className='app-container-button'
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  )
}

export default App;
