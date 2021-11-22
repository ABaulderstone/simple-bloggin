const stateReducer = (state, action) => {
    switch(action.type){
        case "setBlogPosts": {
            return {
                ...state,
                blogPosts: action.data
            }
        }

        case "setCategories": {
            return {
                ...state,
                categories: action.data
            }
        }
        case "setLoggedInUser" : {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "removeLoggedInUser" : {
            return {
                ...state,
                loggedInUser: null
            }
        }

        case "setJWT" : {
            return {
                ...state,
                jwt: action.data
            }
        }

        case "removeJWT" : {
            return {
                ...state,
                jwt: null
            }
        }
        default:
            return state;
    }

}

export default stateReducer