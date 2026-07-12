import { useState } from "react";
import React from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        {!isLoggedIn ? (
          <>
            <Form set={setIsLoggedIn}/>
          </>
        ):(
          <p>You are logged in!</p>
        )
      }
    </div>
  )
}

export default App
