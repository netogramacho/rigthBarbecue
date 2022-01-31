import { useState } from "react";
import { Button } from "reactstrap";
import './Login.css';

export default function Login() {


    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const doLogin = () => {
        window.location.href = '/dashboard'
    }

    return(
        <div className='Login d-flex align-items-center justify-content-center flex-column'>
            <div className='Form--Login d-flex flex-column justify-content-center'>
                <div className='form-group text-left'>
                    <label className='form-label' htmlFor="login">Login</label>
                    <input 
                    onChange={e => setEmail(e.target.value)} 
                    type="text" 
                    name="login" 
                    id="login" 
                    className='form-control' 
                    placeholder='E-mail' 
                    value={email} 
                    required />
                </div>
                <div className='form-group text-left'>
                    <label className='form-label' htmlFor="senha">Senha</label>
                    <input 
                    onChange={e => setPass(e.target.value)} 
                    type="password" 
                    name="senha" 
                    id="senha" 
                    className='form-control' 
                    placeholder='Senha' 
                    value={pass} 
                    required />
                </div>
                <Button onClick={() => {doLogin()}} color='dark' style={{borderRadius:'18px'}}>Entrar</Button>
            </div>
        </div>
    )
} 