const stateReducer = (state, action) => {
    switch(action.type){
        case "setBlogPosts": {
            return {
                ...state,
                blogPosts: action.data
            }
        }

        default:
            return state;
    }

}

export default stateReducer