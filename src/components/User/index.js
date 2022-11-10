import React from 'react'
import './index.css'
import Repo from '../Repo'

export default function ({ data }) {
    return (
        <div>
            <div>
                <div>
                    <h1>{data.name}</h1>
                    <img src={`${data.avatar}`} />
                    <a href={`${data.link}`}>{data.link}</a>
                </div>
                <div>
                    <img src={`https://github-readme-stats.vercel.app/api?username=${data.name}&show_icons=true&locale=en&theme=tokyonight`}/>
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
