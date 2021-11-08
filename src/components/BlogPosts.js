import React from "react";
import {CardDeck } from "../styled-components";
import { BlogPreview } from "./BlogPreview";

const BlogPosts = (props) => {
    const {loading, posts} = props;
    return(
        <>
         {
         loading 
         ? 
         (<p>Loading</p>) 
         : 
         (<CardDeck>
             {posts.sort((a , b)=> b.updated_at - a.updated_at).map(post => (<BlogPreview key={post.id} post={post} />))}
          </CardDeck>)
         
        }
        </>
    )
}

export default BlogPosts;