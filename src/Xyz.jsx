import React, {useState} from 'react';

const Xyz = () => {
    const initialForm = {
        name: "",
        mob: "",
        date: "",
        gmail: "",
    };

    const [form, setForm] = useState(initialForm);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((perForm) => ({
            ...perForm,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register user</h2>
        <div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Enter user Name"
          />
          <input
            type="tel"
            name="mob"
            value={form.mob}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Enter Joining date"
          />
          <input
            type="email"
            name="email"
            value={form.gmail}
            onChange={handleChange}
            placeholder="Enter email address"
            />
            <br />
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Xyz