import blogApi from "../config/api"

export const getCategories = async () => {
    try {
        const response = await blogApi.get('/categories')
        return response.data;

    } catch(error) {
        throw error
    }
}