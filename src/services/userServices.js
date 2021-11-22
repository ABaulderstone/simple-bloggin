import blogApi from "../config/api"

export const logInUser =  async (logInDetails) => {
    try {
       const response = await blogApi.post('/auth/login', logInDetails);
       return response.data;
    } catch(error) {
        throw error
    }
}

export const retrieveUserFromJWT = async () => {
        const jwt = sessionStorage.getItem('jwt')
        const response = await blogApi.post('/auth/logged_in_user', {jwt})
        return response.data
}