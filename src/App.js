import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import UserInfoContext from './Components/Context/UserInfoContext';
import CartPage from './Pages/CartPage/CartPage';


function App() {

  return (
    <UserInfoContext>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </UserInfoContext>
  );
}

export default App;
