import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/dashboard.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/main/Header';
import Nav from './pages/main/Nav';

import Home from './pages/main/Home';
import About from './pages/about/About';

import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
            </Routes>

          </main>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
