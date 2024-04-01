import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Componets/Loginpage/Login';
import ChildComponent from './Componets/MainComponent/ChildComponent';
import Header from './Componets/Loginpage/Header';
import ChildComponentAPI from './Componets/MainComponent/ChildComponentAPI';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/allpages' element={<ChildComponent />} />
        <Route path='/api' element={<ChildComponentAPI />} />
      </Routes>
    </>
  );
}

export default App;
