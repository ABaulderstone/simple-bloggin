import React, {useState, useEffect, useReducer} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createNewPost, getBlogPosts } from './services/blogPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { BlogPost } from './components/BlogPost';
import BlogPosts from './components/BlogPosts';
import { NewBlogPost } from './components/NewBlogPost';
import { NavBar } from './components/NavBar';
import stateReducer from './config/stateReducer';
import intialState from './config/initialState';
import { StateContext } from './config/store';




const App = () => {
  const [store, dispatch] = useReducer(stateReducer, intialState)
  const [loading, setLoading] = useState(true);
  const {blogPosts} = store;

  useEffect(() => {
    getBlogPosts()
      .then(posts => {
        console.log(posts)
        dispatch({type: "setBlogPosts", data: posts})}
        )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  },[])

  function addNewBlogPost(postObject) {
     setLoading(true)
      createNewPost(postObject)
        .then(newPost => dispatch({type:"setBlogPosts", data:[...blogPosts, newPost]}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }

  return (
    <>
    <GlobalStyle />
    <StateContext.Provider value={{store, dispatch}}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<BlogPosts loading={loading} posts={blogPosts} />} />
          <Route path="/posts/new" element={<NewBlogPost addNewBlogPost={addNewBlogPost} />} />
          <Route path="/posts/:id" element={<BlogPost blogPosts={blogPosts} />} />
      </Routes>
    
    </BrowserRouter>
    </StateContext.Provider>
    </>
  )
}

export default App
