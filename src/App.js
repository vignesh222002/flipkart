import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserInfoContext from './Components/Context/UserInfoContext';
import LapRoute from './Pages/RoutingPage/LapRoute';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {

  return (
    <Provider store={store}>
      <UserInfoContext>
        <LapRoute />
      </UserInfoContext>
    </Provider>
  );
}

export default App;
