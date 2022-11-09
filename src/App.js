import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home, Search } from './pages'
import { NavBar } from './components'


function App() {



  return (
    <div >
      <NavBar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
