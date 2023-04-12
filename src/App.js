import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import UserInfoContext from './Components/Context/UserInfoContext';


function App() {

  return (
    <UserInfoContext>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </UserInfoContext>
  );
}

export default App;
