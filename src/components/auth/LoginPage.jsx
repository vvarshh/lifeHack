import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { TextField, Button, Typography, Container } from "@mui/material";
import "./loginPage.css";
// import loginVid from "./loginVid.mp4";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
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
    </div>
  );
};

export default SignIn;
