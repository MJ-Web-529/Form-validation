import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  validEmail,
  validFname,
  validMno,
  validPassword,
  validUsername,
} from "./Regex";

const App = () => {

    let dataGetter = JSON.parse(localStorage.getItem("loginData")) || [];
    let getData = JSON.parse(localStorage.getItem("loginUserData"));
    let AllData = JSON.parse(localStorage.getItem("loginData"));
    const [input, setInput] = useState(getData);
    const navigate = useNavigate();
    const backPage = () => {
        {navigate("/Deshboard")}
    }
    
    const [inputErr, setInputErr] = useState({
        fnameErr: false,
        userNameErr: false,
        userNameExist: false,
        userEmailExist: false,
        userMobileExist: false,
        emailErr: false,
        passwordErr: false,
        rePasswordErr: false,
        mobileErr: false,
        countryErr: false,
        genderErr: false,
        birthdayErr: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "fname" && !validFname.test(value)) {
      return;
    }

    if (name == "userName" && !validUsername.test(value)) {
      return;
    }

    if (name == "password" && !validPassword.test(value)) {
      return;
    }
    if (name == "rePassword" && !validPassword.test(value)) {
      return;
    }

    if (name == "mobile" && !validMno.test(value)) {
      return;
    }

    setInput({ ...input, [name]: value });
    setInputErr({ ...input, [name]: false });
  };

  const handleSubmit = (e) => {
    if (input.fname.length === 0) {
      setInputErr((e) => ({ ...e, fnameErr: true }));
      return;
    }
    if (input.userName.length === 0 || !validUsername.test(input.userName)) {
      setInputErr((e) => ({ ...e, userNameErr: true }));
      return;
    }
    if (input.email.length === 0 || !validEmail.test(input.email)) {
      setInputErr((e) => ({ ...e, emailErr: true }));
      return;
    }
    if (input.password.length === 0) {
      setInputErr((e) => ({ ...e, passwordErr: true }));
      return;
    }
    if (input.rePassword.length === 0) {
      setInputErr((e) => ({ ...e, rePasswordErr: true }));
      return;
    }

    if (input.password != input.rePassword) {
      setInputErr((e) => ({ ...e, rePasswordErr: true }));
      return;
    }
    if (input.mobile.length === 0 || !validMno.test(input.mobile)) {
      setInputErr((e) => ({ ...e, mobileErr: true }));
      return;
    }
    if (input.country === "") {
      setInputErr((e) => ({ ...e, countryErr: true }));
      return;
    }
    if (input.gender === "") {
      setInputErr((e) => ({ ...e, genderErr: true }));
      return;
    }
    if (input.birthday === "") {
      setInputErr((e) => ({ ...e, birthdayErr: true }));
      return;
    }

    // let getData = JSON.parse(localStorage.getItem("loginData")) || [];
    // const userNameChecker = getData.map((e) => e.userName);
    // const emailChecker = getData.map((e) => e.email);
    // const mobileChecker = getData.map((e) => e.mobile);

    // if (userNameChecker.includes(input.userName)) {
    //   setInputErr((e) => ({ ...e, userNameExist: true }));
    //   console.log("in");
    //   return;
    // }

    // if (emailChecker.includes(input.email)) {
    //   setInputErr((e) => ({ ...e, userEmailExist: true }));
    //   return;
    // }

    // if (mobileChecker.includes(input.mobile)) {
    //   setInputErr((e) => ({ ...e, userMobileExist: true }));
    //   return;
    // }

    // let getData = JSON.parse(localStorage.getItem("loginData")) || [];
    // getData.push(input);
    // localStorage.setItem("loginData", JSON.stringify(getData));

    // setInput((e) => ({
    //   ...e,
    //   fname: "",
    //   userName: "",
    //   email: "",
    //   password: "",
    //   rePassword: "",
    //   mobile: "",
    //   country: "",
    //   gender: " ",
    //   birthday: "",
      // }));
      
      localStorage.setItem("loginUserData", JSON.stringify(input))
    //   console.log(AllData);
      let index = AllData.findIndex((x) => x.email == getData.email);
    //   console.log(index);
      dataGetter[index] = Object.assign({}, dataGetter[index], input);
      localStorage.setItem("loginData", JSON.stringify(dataGetter));
      console.log(dataGetter);
  };

    return (
      <div className="p-5 main grid ">
        <input
          className="input"
          type="text"
          placeholder="Enter Full Name"
          name="fname"
          value={input.fname}
          onChange={handleChange}
        />
        {inputErr.fnameErr && <p>Name format is invalid</p>}
        <input
          className="input"
          type="text"
          name="userName"
          placeholder="what we call you"
          value={input.userName}
          onChange={handleChange}
        />
        {inputErr.userNameErr && (
          <p>
            {input.userName.length == 0
              ? "enter user name"
              : "invalid userName"}
          </p>
        )}
        {inputErr.userNameExist && <p>Already exist name</p>}
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email id"
          value={input.email}
          onChange={handleChange}
        />
        {inputErr.emailErr && (
          <p>
            {input.email.length == 0
              ? "enter the email"
              : "Email format is invalid"}
          </p>
        )}
        {inputErr.userEmailExist && <p>Already exist</p>}

        <input
          className={`input`}
          type="text"
          name="password"
          placeholder="password"
          value={input.password}
          onChange={handleChange}
        />
        {inputErr.passwordErr && <p>Password format is invalid</p>}
        <input
          className="input"
          type="text"
          placeholder="rePassword"
          value={input.rePassword}
          onChange={handleChange}
          name="rePassword"
        />
        {inputErr.rePasswordErr && <p>Password is not match</p>}
        <input
          className="input"
          type="number"
          placeholder="Mobile Number"
          value={input.mobile}
          onChange={handleChange}
          name="mobile"
        />
        {inputErr.mobileErr && (
          <p>
            {input.mobile.length == 0
              ? "Enter mobile number"
              : "Mobile number is wrong"}
          </p>
        )}
        {inputErr.userMobileExist && <p>Already exist</p>}

        <label className="m-4 w-[25rem] flex">
          <h1 className="font-bold text-[#D4EBF8]">Choose a Country:</h1>
          <select
            className="country"
            value={input.country}
            onChange={handleChange}
            name="country"
          >
            <option value="" disabled hidden>
              Choose
            </option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Indonesia">Indonesia</option>
          </select>
        </label>
        {inputErr.countryErr && <p>Choose a country</p>}

        <div className=" flex m-4 w-[30rem]">
          <label>
            <h1 className="font-bold text-[#D4EBF8]">Choose gender: </h1>
          </label>
          <div onChange={handleChange} className="flex">
            <div className="mx-5">
              <input className="a" type="radio" value="Male" name="gender" />
              <label>Male</label>
            </div>
            <div className="mr-5">
              <input className="a" type="radio" value="FeMale" name="gender" />
              <label className="mr-[15px]">FeMale</label>
            </div>
            <div className="mr-5">
              <input type="radio" className="a" value="Other" name="gender" />
              <label>Other</label>
            </div>
          </div>
        </div>
        {inputErr.genderErr && <p>Choose a gender</p>}

        {/*For DOB  */}
        <form className=" form m-4 w-[23rem]">
          <label className="flex">
            <h1 className="font-bold text-[#D4EBF8]">Enter your Birthday:</h1>
            <input
              type="date"
              value={input.birthday}
              onChange={handleChange}
              className="dob-input"
              name="birthday"
              required
            />
          </label>
        </form>
        {inputErr.birthdayErr && <p>Choose a DOB</p>}

        <div className="flex justify-center items-center w-full">
          <button
            onClick={() => handleSubmit()}
            className="db-btn1 rounded-lg w-[40px] bg-orange-500 m-1 h-7"
          >
            Save
          </button>
          <button
            onClick={() => backPage()}
            className="db-btn2 rounded-lg w-[60px] bg-orange-500 h-7 "
          >
            Cancel
          </button>
        </div>
      </div>
    );
};

export default App;
