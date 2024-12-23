// import { React, useState} from "react";

// const Input = () => {
//   const [userName, setuserName] = useState('');


//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     const validUserName = inputValue.replace(/[^a-zA-Z_]/g, "");
//     setuserName(validUserName);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         className="class"
//         placeholder="Enter the name"
//         value={userName}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// export default Input;


import { React, useState } from "react";
import { validUsername } from "./Regex";

const Input = () => {
  const [uName, setUName] = useState("");
  const [uErr, setUErr] = useState(false);
  
  const validate = () => {

    if (!validUsername.test(uName)) {
      setUErr(true);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="what we call you"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
      />
      {uErr && <p>Name format is invalid</p>}
      <button onClick={validate}>Click</button>
    </div>
  );
}

export default Input