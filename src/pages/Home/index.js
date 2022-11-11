import React from 'react'
// import Favicon from 'react-favicon'
import './index.css'


const Home = () => {
  return (
    <div className="home"> 
      {/* <Favicon url='../../images/Track-Github.png' /> */}
      <img src={require('../../images/Track-Github.png')} />
      <p>Come here to keep track of all your friends' Github repositories</p>
    </div>
  )
}

export default Home
