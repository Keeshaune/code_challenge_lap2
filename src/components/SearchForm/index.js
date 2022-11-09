import React, { useState } from 'react'
import { getResult } from '../../actions'


const SearchForm = () => {
    const [username, setUsername] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        getResult(username)
    }

    const updateInput = e => {
        const input = e.target.value
        setUsername(input)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={updateInput} type="text" value={username} />
            <input type="Submit" value="Search" />
        </form>
    )
}

export default SearchForm
