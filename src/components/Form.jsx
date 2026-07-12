import React from 'react'

function Form({set}) {
  return (
    <div>
        <label>Username:</label>
          <input type="text"/>
          <br/>
          <label>Password:</label>
          <input type="password"/>
          <br/>
          <button onClick={() => set(true)}>Login</button>
    </div>
  )
}

export default Form