import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'

const posts = [
  { id: '8bbb404c41c', title: 'Mein erster Beitrag', author: 'Alex', date: '2024-06-19' },
  { id: 'bbb404c41cd', title: 'Zweiter Beitrag', author: 'Casey', date: '2024-06-20' },
  { id: '404c41cd100', title: 'Dritter Beitrag', author: 'Jordan', date: '2024-06-21' },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  )
}