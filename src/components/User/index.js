import React from 'react'
import './index.css'
import Repo from '../Repo'

export default function ({ data }) {
    return (
        <div className="user-container">
            <div className="user-data-positions">
                <div>
                    <div className="header">
                    <img src={`${data.avatar}`} />
                    <h1>{data.name}</h1>
                    </div>
                   
                    
                        <a href={`${data.link}`}>{data.link}</a>
                   
                </div>
                <div id="user-card">

                    <img src={`https://github-readme-stats.vercel.app/api?username=${data.name}&show_icons=true&locale=en&theme=transparent`} />
                </div>
            </div>

            <div className="repo-container" >
                {data.userRepos.map(repo => {
                    return <li key={Math.floor(Math.random() * 1000)}>{<Repo repo={repo} />}</li>
                })}
            </div>
        </div>

    )
}
