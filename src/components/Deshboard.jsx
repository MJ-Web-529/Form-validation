import {React, useState} from 'react'
import UserProfile from './UserProfile'

const Deshboard = () => {
  let getData = JSON.parse(localStorage.getItem("loginUserData"));
  const [showModel, setshowModel] = useState(false)

  return (
    <div className="h-[80vh] w-[14.5in] mt-8 bg-blue-150 ml-[0.8in]">
      <div className=" ml-[14in] h-6 bg-slate-50 rounded-full">
        <button
          onClick={() => setshowModel(true)}
          className="text-center ml-[1rem] text-2xl  text-gray-950 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
        </button>
      </div>
      <div className="my-[3cm] mx-[15cm] bg-slate-100 h-auto w-[8cm] rounded-md">
        <h1 className="text-5xl text-center pt-[0.5cm]">Dashboard</h1>
        <div className="p-2 pt-[0.5cm]">
          <h1 className="text-5xl font-extrabold mt-4">Hi, {getData.fname}</h1>
        </div>
      </div>
      {showModel && <UserProfile onClose={() => setshowModel(false)} />}
    </div>
  );
}

export default Deshboard
