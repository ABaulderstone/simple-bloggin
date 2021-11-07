import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getBlogPosts } from './services/blogPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
import BlogPosts from './components/BlogPosts';


const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
      .then(posts => {
        console.log(posts)
        setBlogPosts(posts)}
        )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  },[])

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BlogPosts loading={loading} posts={blogPosts} />}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
