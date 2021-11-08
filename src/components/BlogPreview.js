import React from 'react'
import { Card } from '../styled-components'
import { capitialize, trunctcate } from '../utils/stringUtils';
import Moment from 'react-moment';

/**
* @author
* @function BlogPreview
**/

export const BlogPreview = (props) => {
    const {post} = props;

  return(
    <Card>
        <h3>{post.title}</h3>
        <h4>{capitialize(post.category)}</h4>
        <Moment fromNow>{post.updated_at}</Moment>
        <p>{trunctcate(post.content, 100)}</p>
    </Card>
   )

 }