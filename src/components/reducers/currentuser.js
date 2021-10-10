const currentUser = (state = {user:{}}, action) => {
    switch(action.type){
        case "SET_USER":
            console.log(action.payload)
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;