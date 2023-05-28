import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './loginPage.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [interest1, setInterest1] = useState("");
  const [signUpView, setSignUpView] = useState(false);

  const signIn = (a) => {
    a.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {signUpView ? (
          <div>
            <input
              type="Location"
              placeholder="Enter your location (city)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <input
              type="Interest"
              placeholder="Interest 1"
              value={interest1}
              onChange={(e) => setInterest1(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </div>
        ) : (
          <div>
            <button type="submit">Log In</button>
            <text>or</text>
            <button type="button" onClick={() => setSignUpView(true)}>
              Sign up
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;