import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  
  return (
    <div>
      <nav className="flex justify-end gap-34px bg-black">
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/login"><li >Login</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/register"><li>Register</li></NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
