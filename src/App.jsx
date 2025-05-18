import { useState } from 'react'
import './App.css'
import Main from "./components/Main";


import { UserContext } from './context/UserContext'

function App() {
  const [email, setEmail] = useState("")

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };


  return (
    <>
      <div>
      <UserContext.Provider value={updateEmail}>
      
       
        <Main />
     
      
      </UserContext.Provider>
        
      </div>
      
    </>
  )
}

export default App
