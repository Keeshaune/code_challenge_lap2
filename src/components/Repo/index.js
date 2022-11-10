import React, {useState} from 'react'



export default function Repo ({repo}) { //userRepos[i]
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev)
    }

    const date = formatDate(repo.created_at)

    const info = <div>
    <p>stargazers: {repo.stargazers_count}</p>    
    <p>watchers: {repo.watchers_count}</p>    
    <p>forks: {repo.forks_count}</p>    
    <p>created: {date}</p>      
    </div>

    return (
        <div onClick={handleClick}>
            {isActive ? info : repo.name}
        </div>
    )
}

function formatDate (date) {
    const array = date.split('-')
    return `${array[2].slice(0, 2)}-${array[1]}-${array[0]}`
}

