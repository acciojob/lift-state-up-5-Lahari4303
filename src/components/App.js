import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        {!isLoggedIn ? (
          <>
          <label>Username:</label>
          <input type="text"/>
          <br/>
          <label>Password:</label>
          <input type="password"/>
          <br/>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </>
        ):(
          <p>You are logged in!</p>
        )
      }
    </div>
  )
}

export default App
