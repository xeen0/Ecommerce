import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
const SignUp = ({ signUpStart }) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   };
  // }
  const [userCreadentials, setCreadentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCreadentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords did not match");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setCreadentials({ ...userCreadentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h1 className="title">I don't have an account</h1>
      <span>create account</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="confirmPassword"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  signUpStart: userCreditials => dispatch(signUpStart(userCreditials))
});

export default connect(null, mapDispatchToProps)(SignUp);
