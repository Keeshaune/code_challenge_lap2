import React from 'react'


export default function ({ data }) {
    return (
        <div>
            <div>
                <h1>{data.name}</h1>
                <img src={`${data.avatar}`} />
                <a href={`${data.link}`}>{data.link}</a>
            </div>

            <div>
                {data.userRepos.map(repo => {
                    return <li>{repo.name}</li>
                })}
            </div>
        </div>

    )
}
