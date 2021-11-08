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