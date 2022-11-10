import React from 'react'
import './index.css'
import Repo from '../Repo'
import { IconName } from "react-icons/go";

export default function ({ data }) {
    return (
        <div className="user-container">
            <div className="user-data-positions">
                <div className="user-profile">
                    <div className="user-header">
                        <img src={`${data.avatar}`} />
                        <h1>{data.name}</h1>
                    </div>
                </div>
                <div id="user-card">
                    <a href={`${data.link}`}><img src={`https://github-readme-stats.vercel.app/api?username=${data.name}&show_icons=true&locale=en&theme=transparent`} /></a>
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
