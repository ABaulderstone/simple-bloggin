import React, {} from "react";
import { useGlobalState } from "../config/store";
import {CardDeck } from "../styled-components";
import { BlogPreview } from "./BlogPreview";

const BlogPosts = (props) => {
    const loading = false
    const {store} = useGlobalState();
    const {blogPosts} = store; 
    

    return(
        <>
         {
         loading 
         ? 
         (<p>Loading</p>) 
         : 
         (<CardDeck>
             {blogPosts.sort((a , b)=> b.updated_at - a.updated_at).map(post => (<BlogPreview key={post.id} post={post} />))}
          </CardDeck>)
         
        }
        </>
    )
}

export default BlogPosts;