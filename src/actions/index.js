import axios from 'axios'

const loading = username => ({type: 'LOADING', payload: username})

//////////////////////////////////7
// need to see what results looks like
///////////////////////////////////
const loadResult = ({results}) => ({
    type: 'LOAD_RESULT',
    payload: {results}
})

export const getResult = username => {
    return async dispatch => {
        dispatch(loading(username));
        try {
            const userData = await fetchUserData(username)
            dispatch(loadResult(userData))
        } catch (err) {
            console.warn(err.message)
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    }
}

const fetchUserData = async username => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
        return data
    } catch (err) {
        if (data.status === 404) {throw Error('That is not a valid user')}
        throw new Error(err.message)
    }
}
