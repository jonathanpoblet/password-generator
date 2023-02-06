import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Justify } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import '../styles/passwordviewer.css'

interface Props{
    password: string
}

export default function PasswordViewer({password} : Props) {

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

    useEffect(() => {
        const passwordContainer = document.getElementById('password') as HTMLSpanElement;
        passwordContainer.innerText = password;
      }, [password]);

    return (
        <div className='password-generated'>
            <span className='password-generated-pass' id='password'></span>
            <CopyToClipboard text={ password } onCopy={() => copyPassword(password)}>
                <Justify className='password-generated-copy'/>
            </CopyToClipboard>
        </div>
    )
}
