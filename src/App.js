import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'

export let UserContext = React.createContext()

function App() {

    let [user, setUser] = useState(null)

    let login = (user) => {
        setUser(user)
    }
    let logout = () => {
        setUser(null)
    }
    console.log(user)

  return (
    <UserContext.Provider value={ {user, login, logout} }>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
