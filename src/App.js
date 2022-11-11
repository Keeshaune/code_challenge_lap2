import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home, Search, NotFound } from './pages'
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
