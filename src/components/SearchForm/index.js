import React, { useState } from 'react'
// import { getResult } from '../../actions'


const SearchForm = ({getResult}) => {
    const [username, setUsername] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        getResult(username)
        console.log(username)
    }

    const updateInput = e => {
        const input = e.target.value
        setUsername(input)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={username}  type="text"  onChange={updateInput}/>
            <input type="Submit" value="Search" />
        </form>
    )
}

export default SearchForm
