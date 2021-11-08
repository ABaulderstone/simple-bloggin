import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import {Block, Label, Input, TextArea, InputButton} from '../styled-components/index'

/**
* @author
* @function NewBlogPost
**/

export const NewBlogPost = (props) => {
   
    const navigate = useNavigate();
   
    const initialState = {
        title: "",
        category: "",
        content: ""
    }
    const {addNewBlogPost} = props
    const [formState, setFormState] = useState(initialState);


    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })

    }
    
    
    
    
    function handleSubmit(event) {
        event.preventDefault();
        addNewBlogPost(formState);
        navigate("/");
    }
  
  
  
    return(
    <div>
        <h1>Add a blog post</h1>
        <form id="newPostForm" onSubmit={handleSubmit}>
            <Block>
                <Label>Title</Label>
                <Input type="text" name="title" placeholder="Enter Title.." value={formState.title} onChange={handleChange} />
            </Block>
            <Block>
                <Label>Category</Label>
                <Input type="text" name="category" placeholder="Enter Category.." value={formState.category} onChange={handleChange} />
            </Block>
            <Block>
                <Label>Content</Label>
                <TextArea from="newPostForm" type="text" name="content" placeholder="Enter Text" value={formState.content} onChange={handleChange}></TextArea>
            </Block>
            <Block>
                <InputButton type="submit" value="Add Post" />  
            </Block>
            
        </form>
    </div>
   )

 }