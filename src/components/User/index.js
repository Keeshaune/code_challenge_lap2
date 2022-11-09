import React from 'react'

export default function ({data}) {
    return (
        <>
            <div>
                <h1>{data.userData.name}</h1>
                <img src={`${data.userData.avatar}`} />
                <a href={`${data.userData.link}`}>{data.userData.link}</a>
            </div>
        </>
    )
}
