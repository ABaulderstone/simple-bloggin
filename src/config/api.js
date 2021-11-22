import axios from 'axios'

const blogApi = axios.create({
    baseURL: process.env.REACT_APP_BLOG_API
})

export default blogApi;