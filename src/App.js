import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
      <Home/>
    </div>
  );
}

export default App;
