import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from './components/Register.jsx'
import User from "./components/User";
import Deshboard from './components/Deshboard.jsx'
import EditPage from './components/EditPage.jsx'
import UserProfile from './components/UserProfile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user/:username",
        element: <User />,
      },
      {
        path: "/deshboard",
        element: <Deshboard />,
      },
      {
        path: "/userprofile",
        element: <UserProfile />,
      },
      {
        path: "/editpage",
        element: <EditPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
