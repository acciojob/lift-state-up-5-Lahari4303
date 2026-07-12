import React from 'react'

function Form({set}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    set(true);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Username:</label>
          <input type="text" />
          <br/>
          <label>Password:</label>
          <input type="password" />
          <br/>
          <button type="submit">Login</button>
    </form>
  )
}

export default Form