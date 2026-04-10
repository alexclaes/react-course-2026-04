import './PostList.css';
import Post from './Post.jsx';
import { useReducer, useContext } from 'react';
import { PostsContext } from '../PostsContext';
import { Link } from "react-router";

const initialState = {
  searchTerm: '',
  sortField: 'date',
  sortDirection: 'desc',
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'SET_SORT_FIELD':
      return { ...state, sortField: action.payload };
    case 'SET_SORT_DIRECTION':
      return { ...state, sortDirection: action.payload };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
}

export default function PostList() {
  const { posts } = useContext(PostsContext);
  const [state, dispatch] = useReducer(filterReducer, initialState);

  if (posts.length === 0) {
    return <p>Laden...</p>;
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (state.sortField === 'votes') {
      return state.sortDirection === 'asc' ? a.votes - b.votes : b.votes - a.votes;
    }
    const valA = (a[state.sortField] ?? '').toLowerCase();
    const valB = (b[state.sortField] ?? '').toLowerCase();
    return state.sortDirection === 'asc'
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  return (
    <>
      <input
        type="text"
        placeholder="Suchen..."
        value={state.searchTerm}
        onChange={(event) => dispatch({ type: 'SET_SEARCH', payload: event.target.value })}
        className="PostList-Search"
      />
      <div className="PostList-Controls">
        <select
          value={state.sortField}
          onChange={(event) => dispatch({ type: 'SET_SORT_FIELD', payload: event.target.value })}
        >
          <option value="date">Datum</option>
          <option value="title">Titel</option>
          <option value="votes">Stimmen</option>
        </select>

        <select
          value={state.sortDirection}
          onChange={(event) => dispatch({ type: 'SET_SORT_DIRECTION', payload: event.target.value })}
        >
          <option value="desc">Absteigend</option>
          <option value="asc">Aufsteigend</option>
        </select>

        <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>
          Zuruecksetzen
        </button>
      </div>
      <ul className="PostList">
        {sortedPosts.map((post) => (
          <li key={post.id} className="PostList-Item">
            <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong> von {post.author} - Stimmen: {post.votes}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
