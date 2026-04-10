const API_URL = 'http://localhost:3001/api';

export function fetchPosts() {
  return fetch(`${API_URL}/posts`);
}

export function fetchPostById(id) {
  return fetch(`${API_URL}/posts/${id}`);
}

export function fetchCreatePost(post) {
  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export function fetchUpdatePost(id, post) {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export function fetchDeletePost(id) {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
}