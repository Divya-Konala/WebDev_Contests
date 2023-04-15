import React from "react";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z]+\s[a-zA-Z\s]+$/;
const pwdRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&])/;

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();
  const [submitted,setSubmitted]=useState(false);

  const handleChange = (e, prop) => {
    setFormValues({ ...formValues, [prop]: e.target.value });
  };

  const validateName = () => {
    if (!nameRegex.test(formValues.name)) {
      setError("** name should consisit of firstname and lastname");
      return false;
    } else {
      setError("");
      return true;
    }
  };
  const validateEmail = () => {
    if (!emailRegex.test(formValues.email)) {
      setError("** invalid email ID");
      return false;
    } else {
      setError("");
      return true;
    }
  };
  const validatePassword = () => {
    if (!pwdRegex.test(formValues.password)) {
      setError(
        "** password: consist of capitalLetter, smallLetter, number and specialCharacter"
      );
      return false;
    } else {
      setError("");
      return true;
    }
  };
  const validateConfirmPassword = () => {
    if (formValues.password !== formValues.confirmPassword) {
      setError("** confirm password - password mismatch");
      return false;
    } else {
      setError("");
      return true;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.name==="" || formValues.email==="" || formValues.password==="" || formValues.confirmPassword===""){
        setError("Error : All the fields are mandatory");
        setSubmitted(false);
    }
    else if (
      validateName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      setSubmitted(true);
      setFormValues({ name: "", email: "", password: "", confirmPassword: "" });
    }else{
        setSubmitted(false);
    }
  };


  return (
    <div className="SignUpForm">
      <form>
        <fieldset>
          <legend style={{ textAlign: "left" }}>
            <h1>signup</h1>
          </legend>
          <input
            onChange={(e) => handleChange(e, "name")}
            value={formValues.name}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => handleChange(e, "email")}
            value={formValues.email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => handleChange(e, "password")}
            value={formValues.password}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => handleChange(e, "confirmPassword")}
            value={formValues.confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          {error != undefined && <p className="errorMsg">{error}</p>}
          {submitted==true && <p className="successMsg">form submitted successfully!</p>}
          <button onClick={(e) => handleSubmit(e)} type="submit">
            Signup
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpForm;
