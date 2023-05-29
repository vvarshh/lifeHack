import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, firestore } from '../../firebase';
import { Link } from 'react-router-dom';
import loginVid from '../auth/loginVid.mp4';
import './loginPage.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="login-page-container">
            <div className="left-section">
                <div className="video-container">
                    <video src={loginVid} autoPlay muted loop className="background-video" />
                    <div className="text-overlay">
                        <h2 className="video-text">Travel Talk</h2>
                        <br></br>
                        <h4>
                            <i>Where your journey begins</i>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="login-form-container">
                    <form onSubmit={signIn}>
                        <h1>Log In to your Account</h1>
                        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <button type="submit">Log In</button>
                    </form>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
