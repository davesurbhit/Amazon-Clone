import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //firebase login

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                    history.push('/')
                })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //firebase register stuff
    }
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
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    
                        <button type='submit' onClick={signIn}
                            className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                    </p>
                    </div>

                <div className='login__new'>
                <p><span>New to Amazon?</span></p>

                    <button onClick={register}
                        className='login__registerButton'>Create your Amazon account</button></div>
                
                
            </div>
            
            

        </div>
    )
}

export default Login
