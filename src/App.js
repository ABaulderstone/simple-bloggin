import React, {useState, useEffect, useReducer} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './styled-components/globalStyles';
import { BlogPost } from './components/BlogPost';
import BlogPosts from './components/BlogPosts';
import { NewBlogPost } from './components/NewBlogPost';
import { NavBar } from './components/NavBar';
import stateReducer from './config/stateReducer';
import intialState from './config/initialState';
import { StateContext } from './config/store';
import { getBlogPosts } from './services/blogPostServices';




const App = () => {
  
  const [store, dispatch] = useReducer(stateReducer, intialState)
  
  useEffect(() => {
    getBlogPosts()
     .then(posts => dispatch({type: "setBlogPosts", data: posts}) )
     .catch(error => console.log(error))
    }, [])

  return (
    <>
    <GlobalStyle />
    <StateContext.Provider value={{store, dispatch}}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<BlogPosts  />} />
          <Route path="/posts/new" element={<NewBlogPost  />} />
          <Route path="/posts/:id" element={<BlogPost/>} />
      </Routes>
    
    </BrowserRouter>
    </StateContext.Provider>
    </>
  )
}

export default App
