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

const getNextId = () => {
    const maxId = Math.max(...posts.map(post => post.id));
    return maxId + 1;
}

export const createNewPost = (postObject) => {
    const newPost = {
        ...postObject,
        category: postObject.category || "misc",
        updated_at: Date.now(),
        id: getNextId()
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(newPost);
        }, 500)
    })
}