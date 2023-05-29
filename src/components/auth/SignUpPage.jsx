import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, firestore } from "../../firebase";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Add user to the "users" collection in Firestore
      await addDoc(collection(firestore, "users"), {
        email: user.email,
        location: location,
        age: age,
        // Add additional fields as needed
      });

      console.log(userCredential);

      // Redirect to the landing page
       navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
        <LocationDropdownMenu location={location} setLocation={setLocation} />
        <AgeDropdownMenu age={age} setAge={setAge} ageRange={40} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

const LocationDropdownMenu = ({location, setLocation}) => {

    const handleSelectChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
          <h3>Home Location:</h3>
            <select value={location} onChange={handleSelectChange}>
                <option value="">Choose Location</option>
                <option value="option1">Singapore</option>
                <option value="option2">Munich</option>
                <option value="option3">London</option>
            </select>
        </div>
    );
};

const AgeDropdownMenu = ({ age, setAge, ageRange }) => {
    const handleSelectChange = (event) => {
        setAge(event.target.value);
    };

    const generateOptions = () => {
        const options = [];
        for (let age = 18; age <= ageRange; age++) {
            options.push(
                <option key={age} value={age}>
                    {age}
                </option>
            );
        }
        return options;
    };

    return (
        <div>
            <h3>Age:</h3>
            <select value={age} onChange={handleSelectChange}>
                <option value="">Select Age</option>
                {generateOptions()}
            </select>
        </div>
    );
};