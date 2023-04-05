import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMain from './Components/NavBar/NavbarMain';

function App() {
  return (
    <Routes>
        <Route path='/' element={<NavbarMain />} />
    </Routes>
  );
}

export default App;
