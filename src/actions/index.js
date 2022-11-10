import axios from 'axios'

const loading = username => ({type: 'LOADING', payload: username})

const loadResult = (result) => ({
    type: 'LOAD_RESULT',
    payload: result
})


export const getResult = username => {
    return async dispatch => {
        dispatch(loading(username));
        try {
            const userData = await fetchUserData(username)
            // let output = {
            //     name: userData[0].owner.login,
            //     avatar: userData[0].owner.avatar_url,
            //     link: userData[0].owner.html_url
            // }
    
            
            console.log('*****************')
            console.log(userData)
            console.log('*****************')
            dispatch(loadResult(userData))
        } catch (err) {
            console.warn(err.message)
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    }
}

const fetchUserData = async username => {
    try {
        const data = await axios.get(`https://api.github.com/users/${username}/repos`)

        return data.data
    } catch (err) {
        if (data.status === 404) {throw Error('That is not a valid user')}
        throw new Error(err.message)
    }
}
