import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { TextField, Button, Typography } from "@mui/material";
import "./loginPage.css";
import loginImage from "../../backgroundImage.jpg";
import loginVid from "../auth/loginVid.mp4";

const LoginPage = () => {
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
          interest3: selectedOption3,
        });
        console.log("User signed up and profile updated successfully:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page-container">
      <div className="left-section">
        <div className="video-container">
          <video
            src={loginVid}
            autoPlay
            muted
            loop
            className="background-video"
          />
          <div className="text-overlay">
            <h2 className="video-text">Travel Talk</h2>
            <br></br>
            <h4>
              <i>Where your journey begins</i>
            </h4>
          </div>
        </div>
      </div>
      <div className="login-form-container">
        <div className="right-section">
          <form onSubmit={signUpView ? signUp : signIn}>
            <TextField
              type="email"
              label="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {signUpView && (
              <>
                <TextField
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <TextField
                  type="text"
                  label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
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
                <Button variant="contained" type="submit">
                  Sign Up
                </Button>
              </>
            )}
            {!signUpView && (
              <>
                <Button variant="contained" type="submit">
                  Log In
                </Button>
                <Typography>or</Typography>
                <Button variant="contained" onClick={() => setSignUpView(true)}>
                  Create Account
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

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
