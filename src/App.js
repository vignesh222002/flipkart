import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import UserInfo from './Pages/LoginPage/UserInfo';

function App() {
  return (
    <UserInfo>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </UserInfo>
  );
}

export default App;
