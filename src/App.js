import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

const App = () => {
  return (
    <div>
      <Home/>
      <Login/>
      <Register/>
    </div>
  );
};

export default App;