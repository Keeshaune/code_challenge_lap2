import axios from 'axios'

const loading = username => ({type: 'LOADING', payload: username})

//////////////////////////////////7
// need to see what results looks like
///////////////////////////////////
const loadResult = ({ results: { name, avatar, link } }) => ({
    type: 'LOAD_RESULT',
    payload: { name, avatar, link }
})

export const getResult = username => {
    return async dispatch => {
        dispatch(loading(username));
        try {
            const userData = await fetchUserData(username)
            // console.log('*****************')
            // console.log(userData)
            // console.log('*****************')
            let output = {
                name: userData[0].owner.login,
                avatar: userData[0].owner.avatar_url,
                link: userData[0].owner.html_url
            }
            console.log('*****************')
            console.log(output)
            console.log('*****************')
            dispatch(loadResult(output))
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
