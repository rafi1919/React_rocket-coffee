import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

import Header from './component/Header'
import Showcase from './component/Showcase'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Option from './component/Option'
import Footer from './component/Footer'


class App extends Component{
render() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
      </Routes>

      <Option /> 
      <Footer />
    </Router>
  );
}
}

export default App;
