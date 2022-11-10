import React from 'react'
import './index.css'

export default function ({ data }) {
    return (
        <div className="user-container">
            <div className="user-info">
                <h1>{data.name}</h1>
                <img src={`${data.avatar}`} />
                <a href={`${data.link}`}>{data.link}</a>
            </div>

            <div className="repo-container" >
                {data.userRepos.map(repo => {
                    return <li><button>{repo.name}</button></li>
                })}
            </div>
        </div>

    )
}
