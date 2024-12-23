import React from 'react'

const Login = () => {
  return (
    <div className="login-div">
      <label htmlFor="Name">Login</label> 
        <input
          className="login-text"
          type="text "
          placeholder="Enter Email Name"
          />
        <input
          className="login-text"
          type="text"
          placeholder="Password"
          />
      <button className='button'>Login-In</button>
    </div>

  );
}

export default Login