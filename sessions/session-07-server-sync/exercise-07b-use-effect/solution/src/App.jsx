import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import { uid } from 'uid';
import { PostsContext } from './PostsContext';
import {Routes, Route} from "react-router"
import HomePage from './pages/HomePage';
import AllPostsPage from './pages/AllPostsPage';
import AddPostPage from './pages/AddPostPage';
import NavBar from './components/NavBar';
import PostDetailsPage from './pages/PostDetailsPage';
import { fetchPosts } from './api.js';

export default function App() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetchPosts();
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);
 
  function createPost(newPost) {
    setPosts([...posts, { id: uid(), votes: 0, ...newPost }]);
  }

  function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
    );
  }
 
  function deletePost(id) {
    setPosts(posts.filter((item) => item.id !== id));
  }

  return (
    <PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
      </div>
    </PostsContext.Provider>
  )
}