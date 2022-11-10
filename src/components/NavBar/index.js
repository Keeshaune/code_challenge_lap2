import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './index.css'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                <h1>RepoTrackerz</h1>
                <div className="links">

                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/search">Search</NavLink>

                    {/* <p onClick={()=> navigate(-1)}>Back  </p> */}
                    <button onClick={() => navigate(-1)} id="BackButton" >Back</button>
                </div>

            </nav>

        </>
    );
}

export default NavBar;
