import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
            </Link>

            <div className='login__container'>
                <div className='login__upper'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />
                    
                    <h5>Password</h5>
                    <input type='password' />
                    
                    <button className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                    </p>
                    </div>

                <div className='login__new'>
                <p><span>New to Amazon?</span></p>

                    <button className='login__registerButton'>Create your Amazon account</button></div>
                
                
            </div>
            
            

        </div>
    )
}

export default Login
