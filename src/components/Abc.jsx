import { useState } from "react";

const App = () => {
  const initialvalues = {
    fname: "",
    lname: ""
  };
  const [data, setData] = useState(initialvalues);
  const display = () => {console.log(data);};
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="App">
      <input
        placeholder="enter name"
        value={data.fname}
        name="fname"
        id="fname"
        onChange={handleChange}
      />
      <input
        placeholder="enter surname"
        value={data.lname}
        name="lname"
        id="lname"
        onChange={handleChange}
      />
      <button onClick={display}>click</button>
    </div>
  );
}


export default App;