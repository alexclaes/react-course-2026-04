import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'
import { useState } from 'react';
import PostForm from './components/PostForm';
import { uid } from 'uid';
import { PostsContext } from './PostsContext';

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
        <PostList posts={posts} onUpdatePost={updatePost} onDeletePost={deletePost} />
        <PostForm onCreatePost={createPost} />
      </div>
    </PostsContext.Provider>
  )
}