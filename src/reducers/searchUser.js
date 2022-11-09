const initState = {
    username: "",
    result: {},

}

const searchUser = (state = initState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, username : action.username, loading: true}
        case 'LOAD_RESULT':
            return {...state, result: action.result, loading: false, error: false}
        case 'SET_ERROR':
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export default searchUser
