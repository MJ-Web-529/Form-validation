import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {validEmail, validPassword } from "./Regex";

const App = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [inputErr, setInputErr] = useState({
    emailErr: false,
    passwordErr: false,
    emailErr1: false,
    passwordErr1: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "password" && !validPassword.test(value)) {
      return;
    }

    setInput({ ...input, [name]: value });
    setInputErr({ ...input, [name]: false });
  };

  const handleSubmit = (e) => {
    if (input.email.length === 0 || !validEmail.test(input.email)) {
      setInputErr((e) => ({ ...e, emailErr: true }));
      return;
    }

    let getData = JSON.parse(localStorage.getItem("loginData"));
    const emailChecker = getData.map((e) => e.email);
    const passwordChecker = getData.map((e) => e.password);
    
    if (input.password.length === 0) {
      setInputErr((e) => ({ ...e, passwordErr: true }));
      return;
    }

    //login data store
    const findData = getData.find((e) => input.email == e.email);
    // const fullName = findData.fname;
    // console.log(findData);
    localStorage.setItem("loginUserData", JSON.stringify(findData))
    
    

    if (emailChecker.includes(input.email)) { /* include gives ans in true - false*/ 
      if (passwordChecker.includes(input.password)) { 
        console.log("password is correct")
         navigate("/Deshboard");
      }
      else {
        console.log("password is in-correct")
        setInputErr((e) => ({ ...e, passwordErr1: true }));
      }
    }
    else {
      setInputErr((e) => ({ ...e, emailErr1: true }));
      console.log("email not correct");
    }
    // setInput({
    //   fname: fullName
    // });
    // console.log(setInput);
    
  };

  return (
    <div className="p-5 main grid">
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email id"
        value={input.email}
        onChange={handleChange}
      />
      {inputErr.emailErr && (/*<p>enter the email</p> */
        <p>
          {input.email.length == 0 ? "enter the email" : "Email is not match"}
        </p>
      )}
      {inputErr.emailErr1 && <p> email is not exist</p>}

      <input
        className={`input`}
        type="text"
        name="password"
        placeholder="password"
        value={input.password}
        onChange={handleChange}
      />
      {inputErr.passwordErr && <p>{input.password.length == 0 ? "enter the password" :"Password format is invalid"}</p>}
      {inputErr.passwordErr1 && <p> Enter the valid password</p>}
      <button className="mainbtn" onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default App;
