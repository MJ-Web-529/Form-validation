import React, { useState } from "react";
import { validEmail, validFname,validMno, validPassword, validUsername } from "./Regex";


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

  const [country, setCountry] = useState("");

  const [gender, setGender] = useState("");

  const [birthday, setBirthday] = useState("");

  const handleChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleFnameChange = (e) => {
    const inputValue = e.target.value;
    const validFname = inputValue.replace(/[^a-z A-Z]/g, "");
    setFname(validFname);
    setFerr(false)
    };
  

  const handleUserChange = (e) => {
    const inputValue = e.target.value;
    const validUserName = inputValue.replace(/[^a-z_0-9]/g, "");
    setuserName(validUserName);
    setUErr(false)
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const validEmail = inputValue.replace(/[^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-z]$/g,"");
    setEmail(validEmail);
    setEmailErr(false)

  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const setGenderhandler = (event) => {
    setGender(event.target.value);
  };

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
    if (!validFname.test(fname)){
      setFerr(true);
      return;  
      }

      if (!validUsername.test(userName)){
        setUErr(true);
        return;
      }

      if (!validEmail.test(email)){
        setEmailErr(true);
        return;
      }

      if (!validPassword.test(password)){
        setPasswordErr(true);
        return;
      }

      if (password !== rpwd){
        setrErr(true);
        return;
      }

      if (!validMno.test(mo)){
        setMoerr(true);
        return;
      }

      if (!country){
        alert("Please select your gender!");
        return;
      }

      if (!gender){
        alert("Please select your gender!");
        return;
      }

      if (!birthday){
        alert("Please select your birthday!");
        return;
      }

      else
        alert(`Your birthday is: ${birthday}`);
        let getData = JSON.parse(localStorage.getItem("Data")) || [];
        getData.push(UserDetails);
        localStorage.setItem("loginData", JSON.stringify(getData));
    
  };

  return (
    <div className="  p-5 main grid">
      <input
        className="input"
        type="text"
        placeholder="Enter Full Name"
        value={fname}
        onChange={handleFnameChange}
        onBlur={() => {
          if (fname.length === 0) {
            setFerr(true);
          }
        }}
      />
      {fErr && <p>Name format is invalid</p>}
      <input
        className="input"
        type="text"
        placeholder="what we call you"
        value={userName}
        onChange={handleUserChange}
        onBlur={() => {
          if (userName.length === 0) {
            setUErr(true);
          }
        }}
      />
      {uErr && <p>Name format is invalid</p>}
      <input
        className="input"
        type="email"
        placeholder="Email id"
        value={email}
        onChange={handleEmailChange}
        onBlur={() => {
          if (email.length === 0) {
            setEmailErr(true);
          }
        }}
      />
      {emailErr && <p>Email format is invalid</p>}
      <input
        className={`input ${passwordErr ? "red-border" : "blue-border"}`}
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordErr(false);
        }}
        onBlur={() => {
          if (password.length === 0) {
            setPasswordErr(true);
          }
        }}
      />
      {passwordErr && <p>Password format is invalid</p>}
      <input
        className="input"
        type="text"
        placeholder="re-password"
        value={rpwd}
        onChange={(e) => {
          setRpwd(e.target.value);
          setrErr(false);
        }}
        onBlur={() => {
          if (rpwd.length === 0) {
            setrErr(true);
          }
        }}
      />
      {rErr && <p>Password is not match</p>}
      <input
        className="input"
        type="number"
        placeholder="Mobile Number"
        value={mo}
        onChange={(e) => {
          setMo(e.target.value);
          setMoerr(false);
        }}
        onBlur={() => {
          if (mo.length === 0) {
            setMoerr(true);
          }
        }}
      />
      {moerr && <p>Mobile number is wrong</p>}

      <label className="m-4 w-[25rem] flex">
        <h1 className="font-bold text-[#D4EBF8]">Choose a Country:</h1>
        <select
          className="country"
          value={country}
          onChange={handleCountryChange}
        >
          <option value="" disabled hidden>
            {" "}
            -Choose{" "}
          </option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Indonesia">Indonesia</option>
        </select>
      </label>

      <div className=" flex m-4 w-[30rem]">
        <label>
          <h1 className="font-bold text-[#D4EBF8]">Choose gender: </h1>
        </label>
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
            <label className="mr-[15px]">FeMale</label>
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
      <form className=" form m-4 w-[23rem]">
        <label className="flex">
          <h1 className="font-bold text-[#D4EBF8]">Enter your Birthday:</h1>
          <input
            type="date"
            value={birthday}
            onChange={handleChange}
            className="dob-input"
            required
          />
        </label>
      </form>

      <button onClick={validate}>Submit</button>
    </div>
  );
};

export default App;
