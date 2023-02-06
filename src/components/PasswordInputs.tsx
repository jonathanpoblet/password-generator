import { CheckCircle, Circle } from 'react-bootstrap-icons';

import '../styles/passwordinputs.css'

interface Props {
    checkUpperCase: boolean
    checkLowerCase: boolean
    checkNumbers: boolean
    checkSymbols: boolean
    setCheckUpperCase: React.Dispatch<React.SetStateAction<boolean>>
    setCheckLowerCase: React.Dispatch<React.SetStateAction<boolean>>
    setCheckNumbers: React.Dispatch<React.SetStateAction<boolean>>
    setCheckSymbols: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PasswordInputs({ checkLowerCase,checkUpperCase,checkNumbers,checkSymbols,setCheckLowerCase,setCheckUpperCase,setCheckNumbers,setCheckSymbols } : Props) {
    return (
        <>
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
        </>
    )
}
