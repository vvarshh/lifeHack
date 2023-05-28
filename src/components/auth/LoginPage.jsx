<<<<<<< HEAD
=======
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
>>>>>>> 620e95722c1cab52cb9d606df9ce973134c47bc8
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { TextField, Button, Typography, Container } from "@mui/material";
import "./loginPage.css";
// import loginVid from "./loginVid.mp4";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [signUpView, setSignUpView] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      // Update the user's profile with additional information
      user.updateProfile({
        location: location,
        interest1: selectedOption1,
        interest2: selectedOption2,
        interest3: selectedOption3
      });
      console.log('User signed up and profile updated successfully:', user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
<<<<<<< HEAD
    <div className="login-page-container">
      <div className="video-container">
        {/* <video src={loginVid} controls autoPlay loop /> */}
      </div>
      <Container maxWidth="sm" className="login-form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Log In to your Account
        </Typography>
        <form onSubmit={signIn}>
          <TextField
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </form>
      </Container>
=======
    <div className="sign-in-container">
      <form onSubmit={signUpView ? signUp : signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required="true"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          required="true"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {signUpView ? (
          <div>
            <input
              type="password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <input
              type="Location"
              placeholder="Enter your location (city)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <DropdownMenu
              selectedOption={selectedOption1}
              setSelectedOption={setSelectedOption1}
            />
            <DropdownMenu
              selectedOption={selectedOption2}
              setSelectedOption={setSelectedOption2}
            />
            <DropdownMenu
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
            />
            <button type="submit">Sign Up</button>
          </div>
        ) : (
          <div>
            <button type="submit">Log In</button>
            <text>or</text>
            <button type="button" onClick={() => setSignUpView(true)}>
              Create Account
            </button>
          </div>
        )}
      </form>
>>>>>>> 620e95722c1cab52cb9d606df9ce973134c47bc8
    </div>
  );
};

export default SignIn;
<<<<<<< HEAD
=======

const DropdownMenu = ({ selectedOption, setSelectedOption }) => {
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Choose an option</option>
        <option value="option1">Food</option>
        <option value="option2">Outdoor & Wildlife</option>
        <option value="option3">Urban exploration</option>
        <option value="option4">History & Culture</option>
      </select>
    </div>
  );
};
>>>>>>> 620e95722c1cab52cb9d606df9ce973134c47bc8
