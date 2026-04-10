import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'
import { useState } from 'react';
import PostForm from './components/PostForm';

const initialPosts = [
  {
    id: '8bbb404c41c',
    title: 'Mein erster Beitrag',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'Ein kurzer Überblick über meine erste Erfahrung.',
  },
  {
    id: 'bbb404c41cd',
    title: 'Zweiter Beitrag',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details zum zweiten Erlebnis und seinen Auswirkungen.',
  },
  {
    id: '404c41cd100',
    title: 'Dritter Beitrag',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Erkenntnisse und Schlussfolgerungen aus der dritten Diskussion.',
  },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
      <PostForm />
    </div>
  )
}