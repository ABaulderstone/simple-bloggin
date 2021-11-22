import axios from 'axios'

const blogApi = axios.create({
    baseURL: process.env.REACT_APP_BLOG_API
})

export default blogApi;

export function parseError(error) {
    const {response} = error;
    if(!response) return "Oops something went wrong";
    if(response.data.error) return response.data.error;
    if(response.data.errors) return response.data.errors.join(", ")
}