import posts from '../data/posts';

export const getBlogPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts)
        }, 500)
    })
}