import posts from '../data/posts';

export const getBlogPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts)
        }, 500)
    })
}

export const getBlogPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.find(post => post.id === parseInt(id)))
        }, 500)
    })
}
const getNextId = () => {
    const maxId = Math.max(...posts.map(post => post.id));
    return maxId + 1;
}

export const createNewPost = (postObject) => {
    const newPost = {
        ...postObject,
        updated_at: Date.now(),
        id: getNextId()
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(newPost);
        }, 500)
    })
}