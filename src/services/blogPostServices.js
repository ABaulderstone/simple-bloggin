import posts from '../data/posts';
import blogApi from '../config/api';

export const getBlogPosts = async () => {
   try 
   {
    const response = await blogApi.get('/posts');
    return response.data;
   } 
   catch (err) 
   {
       console.log(err)
        throw err
   }
}

export const getBlogPost = async (id) => {
    try 
   {
    const response = await blogApi.get('/posts/' + id);
    return response.data;
   } 
   catch (err) 
   {
       console.log(err)
        throw err
   }
}



export const createNewPost =  async (postObject) => {
    try 
    {
     const response = await blogApi.post('/posts', postObject);
     return response.data;
    } 
    catch (err) 
    {
         throw err
    }
}