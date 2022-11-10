const initState = {
    username: "",
    data: {
        
    },
    loading:false

}

const searchUser = (state = initState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, username : action.payload, loading: true}
        case 'LOAD_RESULT':
            return {...state, data: action.payload, loading: false, error: false}
        case 'SET_ERROR':
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export default searchUser
