import React from 'react'
import {Helmet} from "react-helmet"
import favicon from '../../images/Track-Github.png'
import './index.css'


const Home = () => {
  return (
    <div className="home"> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>RepoTrackerz</title>
        <link rel="icon" type='image/png' href={favicon} />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <img src={require('../../images/Track-Github.png')} />
      <p>Come here to keep track of all your friends' Github repositories</p>
    </div>
  )
}

export default Home
