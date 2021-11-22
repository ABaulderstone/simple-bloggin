import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { useParams } from 'react-router';
import { useGlobalState } from '../config/store';
import { getBlogPost } from '../services/blogPostServices';
import { capitialize } from '../utils/stringUtils';


export const BlogPost = (props) => {
    const {store} = useGlobalState()
    const {blogPosts} = store;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
  

    useEffect(() => {
     
      getBlogPost(id)
      .then(post => setPost(post))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))  
    },[id])

 

    if(!post) {
        return loading ? (<p>Loading</p>):  (<p>Ooops, couldn't find your post</p>)
    }
    
    

    return(
        
         
                <>
                <h1>{post.title}</h1>
                <h2>Author: {post.author.username}</h2>
                <Moment fromNow>{post.updated_at}</Moment>
                <h3>{capitialize(post.category.name)}</h3>
                <p>{post.content}</p>
                </>
         
    )   
    
}
