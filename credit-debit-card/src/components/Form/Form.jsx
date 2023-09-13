import React, { useState } from 'react';
import './Form.css';

function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

  return (
    <div className='FormCenter'>
      <form>
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;