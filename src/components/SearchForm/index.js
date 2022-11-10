import React, { useState, useEffect } from 'react'
import './index.css'


const SearchForm = ({getResult}) => {
    const [username, setUsername] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        getResult(username)
    }

    const updateInput = e => {
        const input = e.target.value
        setUsername(input)
    }

    useEffect(() => {
        getResult('Keeshaune')
      }, [])
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="input-name">Enter Github Name</label>
            <input id="input-name" className="input-text" type="text"  value={username} onChange={updateInput}/>
            <input className="submit" type="Submit" value="Search" />
        </form>
    )
}

export default SearchForm
