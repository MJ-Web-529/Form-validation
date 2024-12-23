import React, { useState } from "react";
import { validEmail, validFname, validMno, validPassword, validUsername } from "./Regex";
const App = () => {

  const [fname, setFname] = useState("");
  const [fErr, setFerr] = useState(false);

  const [userName, setuserName] = useState("");
  const [uErr, setUErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [rpwd, setRpwd] = useState("");
  const [rErr, setrErr] = useState(false);

  const [mo, setMo] = useState("");
  const [moerr, setMoerr] = useState(false);

  const [country, setCountry] = useState("")

  const [gender, setGender] = useState("");

  const [birthday, setBirthday] = useState("");
  
  const handleChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleFnameChange = (e) => {
  const inputValue = e.target.value;
  const validFname = inputValue.replace(/[^a-z A-Z]/g, "");
  setFname(validFname);
  };
  
  const handleUserChange = (e) => {
  const inputValue = e.target.value;
  const validUserName = inputValue.replace(/[^a-z_0-9]/g, "");
  setuserName(validUserName);
  };

  const handleEmailChange = (e) => {
  const inputValue = e.target.value;
  const validEmail = inputValue.replace(/[^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-z]$/g,"");
  setEmail(validEmail);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const setGenderhandler = (event) => {
    setGender(event.target.value)
  }

  const UserDetails = {
    fname,
    userName,
    email,
    password,
    rpwd,
    mo,
    country,
    gender,
    birthday,
  };

  const validate = () => {
    switch (true) {
      case !validFname.test(fname):
        setFerr(true);
        break;

      case !validUsername.test(userName):
        setUErr(true);
        break;

      case !validEmail.test(email):
        setEmailErr(true);
        break;

      case !validPassword.test(password):
        setPasswordErr(true);
        break;

      case password !== rpwd:
        setrErr(true);
        break;

      case !validMno.test(mo):
        setMoerr(true);
        break;

      case !country:
        alert("Please select your gender!");
        break;
      
      case !gender:
        alert("Please select your gender!");
        break;

      case !birthday:
        alert("Please select your birthday!");
        break;

      default:
        alert(`Your birthday is: ${birthday}`);
        let getData = JSON.parse(localStorage.getItem("Data")) || [];
        getData.push(UserDetails);
        localStorage.setItem("loginData", JSON.stringify(getData));
    }
     
  };


  return (
    <div className=" bg-red-400 p-5 main grid">
      <input
        className="input"
        type="text"
        placeholder="Enter Full Name"
        value={fname}
        onChange={handleFnameChange}
      />
      {fErr && <p>Name format is invalid</p>}
      <input
        className="input"
        type="text"
        placeholder="what we call you"
        value={userName}
        onChange={handleUserChange}
      />
      {uErr && <p>Name format is invalid</p>}
      <input
        className="input"
        type="email"
        placeholder="Email id"
        value={email}
        onChange={handleEmailChange}
      />
      {emailErr && <p>Email format is invalid</p>}
      <input
        className={`input ${passwordErr? 'red-border': 'blue-border'}`}
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordErr && <p>Password format is invalid</p>}
      <input
        className="input"
        type="text"
        placeholder="re-password"
        value={rpwd}
        onChange={(e) => setRpwd(e.target.value)}
      />
      {rErr && <p>Password is not match</p>}
      <input
        className="input"
        type="number"
        placeholder="Mobile Number"
        value={mo}
        onChange={(e) => setMo(e.target.value)}
      />
      {moerr && <p>Mobile number is wrong</p>}

      <label htmlFor="country" className="justify-around p-5px">
        Choose a Country:
        <select className="country" value={country} onChange={handleCountryChange}>
          <option value="" disabled hidden> -Choose </option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Indonesia">Indonesia</option>
        </select>
      </label>

      <div className="flex">
        <label htmlFor="Name">Choose gender: </label>
        <div onChange={(e) => setGenderhandler(e)} className="flex">
          <div className="mx-5">
            <input
              className="a"
              type="radio"
              name="inlineRadioOptions"
              value="Male"
            />
            <label>Male</label>
          </div>
          <div className="mr-5">
            <input
              className="a"
              type="radio"
              name="inlineRadioOptions"
              value="FeMale"
            />
            <label>FeMale</label>
          </div>
          <div className="mr-5">
            <input
              type="radio"
              className="a"
              name="inlineRadioOptions"
              value="Other"
            />
            <label>Other</label>
          </div>
        </div>
      </div>

      {/*For DOB  */}
      <form className="form">
        <label className="label">Enter your Birthday:</label>
        <input
          type="date"
          value={birthday}
          onChange={handleChange}
          className="dob-input"
          required
        />
      </form>

      <button onClick={validate}>Submit</button>
    </div>
  );
};

export default App;