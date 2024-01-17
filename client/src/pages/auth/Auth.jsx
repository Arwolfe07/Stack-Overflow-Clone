import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthAbout from './AuthAbout';
import logo from '../../assets/icon.png';
import { login, signup } from '../../actions/auth';
import './Auth.css';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchHandler = () => {
        setIsSignup(!isSignup);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        e.preventDefault();
        if (!email && !password) {
            alert("Enter email and password");
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue");
            }
            dispatch(signup({ name, email, password }, navigate));

        } else {
            dispatch(login({ email, password }, navigate));
        }
    }

    return (
        <section className='auth-section'>
            {isSignup && <AuthAbout />}
            <div className='auth-container-2'>
                {!isSignup && <img src={logo} className='login-logo' alt='logo' />}
                <form onSubmit={formSubmitHandler}>
                    {isSignup &&
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input id='name' type='text' name='name' onChange={(e) => { setName(e.target.value) }} />
                        </label>}
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input id='email' type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</p>}
                        </div>
                        <input id='password' type='password' name='password' onChange={(e) => { setPassword(e.target.value) }} />
                        {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>Passwords must contain at least eight<br /> characters, including at least 1 letter and 1<br /> number.</p>}
                    </label>
                    {isSignup && (
                        <label htmlFor='check'>
                            <input type='checkbox' id='check' />
                            <p style={{ fontSize: '13px' }}>Opt-in to recieve occasional product<br /> updates, user research invitations, company<br /> announcements, and digests.</p>
                        </label>
                    )}
                    <button className='auth-btn' type='submit'>{isSignup ? 'Sign up' : 'Log in'}</button>
                    {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>By clicking “Sign up”, you agree to our
                        <span style={{ color: '#007ac6', cursor: 'pointer' }}> terms of<br /> service</span> and acknowledge
                        that you have read <br />and understand our <span style={{ color: '#007ac6', cursor: 'pointer' }}>privacy
                            policy</span> and <span style={{ color: '#007ac6', cursor: 'pointer' }}>code of <br />conduct</span>.</p>}
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
                    <button type='button' className='handle-switch-btn' onClick={switchHandler}>{isSignup ? 'Log in' : 'Sign up'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth;