import React from "react";

const BlogPosts = (props) => {
    const {loading, posts} = props;
    return(
        <>
         {
         loading 
         ? 
         (<p>Loading</p>) 
         : 
         (<p>Got our blog posts</p>)
         
        }
        </>
    )
}

export default BlogPosts;