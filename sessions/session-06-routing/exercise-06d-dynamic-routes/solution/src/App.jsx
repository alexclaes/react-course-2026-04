import './App.css'
import Header from './components/Header'
import { useState } from 'react';
import { uid } from 'uid';
import { PostsContext } from './PostsContext';
import {Routes, Route} from "react-router"
import HomePage from './pages/HomePage';
import AllPostsPage from './pages/AllPostsPage';
import AddPostPage from './pages/AddPostPage';
import NavBar from './components/NavBar';
import PostDetailsPage from './pages/PostDetailsPage';

const initialPosts = [
  {
    id: '8bbb404c41c',
    title: 'Mein erster Beitrag',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'Ein kurzer Überblick über meine erste Erfahrung.',
    votes: 0,
  },
  {
    id: 'bbb404c41cd',
    title: 'Zweiter Beitrag',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details zum zweiten Erlebnis und seinen Auswirkungen.',
    votes: 0,
  },
  {
    id: '404c41cd100',
    title: 'Dritter Beitrag',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Erkenntnisse und Schlussfolgerungen aus der dritten Diskussion.',
    votes: 0,
  },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
 
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