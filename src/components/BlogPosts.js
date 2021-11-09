import React, { useEffect, useState } from "react";
import { useGlobalState } from "../config/store";
import { getBlogPosts } from "../services/blogPostServices";
import {CardDeck } from "../styled-components";
import { BlogPreview } from "./BlogPreview";

const BlogPosts = (props) => {
    const [loading, setLoading] = useState(false)
    const {store, dispatch} = useGlobalState();
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