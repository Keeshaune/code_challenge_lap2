import React from 'react'

export default function ({data}) {
    return (
        <>
            <div>
                <h1>{data.name}</h1>
                <img src={`${data.avatar}`} />
                <a href={`${data.link}`}>{data.link}</a>
            </div>
            <ul>
                {data.userRepos.map(repo => {
                    return <li>{repo}</li>
                })}
            </ul>
        </>
    )
}
