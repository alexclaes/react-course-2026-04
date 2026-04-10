import './App.css'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post title="Mein erster Beitrag" author="Alex" date="2024-06-19" />
    </div>
  )
}