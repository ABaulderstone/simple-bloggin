import blogApi from "../config/api"

export const logInUser =  async (logInDetails) => {
    try {
       const response = await blogApi.post('/auth/login', logInDetails);
       return response.data;
    } catch(error) {
        throw error
    }
}