import React from 'react'
import { Card } from '../styled-components'
import { capitialize, trunctcate } from '../utils/stringUtils';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';

/**
* @author
* @function BlogPreview
**/

export const BlogPreview = (props) => {
    const {post} = props;

  return(
    <Card>
        <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
        <h4>{capitialize(post.category)}</h4>
        <Moment fromNow>{post.updated_at}</Moment>
        <p>{trunctcate(post.content, 100)}</p>
    </Card>
   )

 }