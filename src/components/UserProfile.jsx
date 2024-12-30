import React from 'react'
import { SquareX, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ onClose }) => {
  const navigate = useNavigate();
  let getData = JSON.parse(localStorage.getItem("loginUserData"));
  const editProfile = () => {
      {navigate("/EditPage")}
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-1 flex flex-col text-white">
        <button onClick={onClose} className="place-self-end">
          <SquareX size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5  mx-4">
          <h1 className="text-5xl font-extrabold mt-4">Hi, {getData.fname}</h1>
          <h2>Full name: {getData.fname}</h2>
          <h2>User Name: {getData.userName}</h2>
          <h2>Email: {getData.email}</h2>
          <h2>password: {getData.password}</h2>
          <h2>re-password: {getData.rePassword}</h2>
          <h2>Mobile No: {getData.mobile}</h2>
          <h2>Country: {getData.country}</h2>
          <h2>gender: {getData.gender}</h2>
          <h2>DOB: {getData.birthday}</h2>
          <button
            onClick={() => editProfile()}
            className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black"
          >
            <Pencil />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile