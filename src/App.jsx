import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './components/Register'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import User from './components/User'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: ( <><Navbar /><Home /></>
      ),
    },
    {
      path: "/login",
      element: (<><Navbar /><Login /></>
      ),
    },
    {
      path: "/register",
      element: (<><Navbar /><Register /></>
      ),
    },{
      path: "/user/:username",
      element: <><Navbar/><User /></>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
