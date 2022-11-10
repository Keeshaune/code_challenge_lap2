import React from 'react'
import { RepoList } from '../../components'

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
                    <RepoList name={repo} />
                })}
            </div>
        </div>

    )
}
