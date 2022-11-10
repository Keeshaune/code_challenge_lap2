import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home, Search } from './pages'
import { NavBar } from './components'
import './app.css'

function App() {



  return (
    <div className="background-color">
      <div className="main-container ">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
