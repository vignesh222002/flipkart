import logo from './logo.svg';
import React from 'react';
import './App.css';
import LapRoute from './Pages/RoutingPage/LapRoute';
import { Provider } from 'react-redux';
import store from './state/store';


function App() {

  return (
    <Provider store={store}>
      <LapRoute />
    </Provider>
  );
}

export default App;