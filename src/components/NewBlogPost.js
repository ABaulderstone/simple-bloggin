import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { useGlobalState } from '../config/store';
import { createNewPost } from '../services/blogPostServices';
import {Block, Label, Input, TextArea, InputButton, Select, Option} from '../styled-components/index'
import { capitialize } from '../utils/stringUtils';
import { parseError } from '../config/api';
/**
* @author
* @function NewBlogPost
**/

export const NewBlogPost = (props) => {
   
    const navigate = useNavigate();
    const {store, dispatch} = useGlobalState();
    const {blogPosts, categories} = store;
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
   
    const initialState = {
        title: "",
        category_id: "",
        content: ""
    }
    
    const [formState, setFormState] = useState(initialState);

    function addNewBlogPost(postObject) {
        setLoading(true)
        createNewPost(postObject)
            .then(newPost =>{
                console.log(newPost);
                dispatch({
                type: "setBlogPosts",
                data: [...blogPosts, newPost]
            })
            setLoading(false)
            navigate("/")
        })
        .catch(error => {
           const message = parseError(error);
           setErrorMessage(message);
        })
        
    }

    
    
    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })

    }
    
    
    
    
    function handleSubmit(event) {
        event.preventDefault();
        addNewBlogPost(formState);
    }
  
  
  
    return(
    <div>
        <h1>Add a blog post</h1>
        <form id="newPostForm" onSubmit={handleSubmit}>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <Block>
                <Label>Title</Label>
                <Input type="text" name="title" placeholder="Enter Title.." value={formState.title} onChange={handleChange} />
            </Block>
            <Block>
                <Label>Category</Label>
                <Select name="category_id" defaultValue="" onChange={handleChange}>
                    <Option disabled hidden value="">Select Category:</Option>
                    {categories.map(category => (<Option key={category.id} value={category.id}>{capitialize(category.name)}</Option>))}
                </Select>
            </Block>
            <Block>
                <Label>Content</Label>
                <TextArea from="newPostForm" type="text" name="content" placeholder="Enter Text" value={formState.content} onChange={handleChange}></TextArea>
            </Block>
            <Block>
                <InputButton disabled={loading} type="submit" value="Add Post" />  
            </Block>
            
        </form>
    </div>
   )

 }