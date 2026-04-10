const crypto = require('crypto');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// CORS - allow requests from Vite dev server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Database setup
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      date TEXT NOT NULL,
      summary TEXT NOT NULL,
      votes INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Seed with initial data if table is empty
  db.get('SELECT COUNT(*) as count FROM posts', (err, row) => {
    if (row.count === 0) {
      const stmt = db.prepare(
        'INSERT INTO posts (id, title, author, date, summary, votes) VALUES (?, ?, ?, ?, ?, ?)'
      );
      stmt.run(crypto.randomUUID(), 'Mein erster Beitrag', 'Alex', '2024-06-19', 'Ein kurzer Ueberblick ueber meine erste Erfahrung.', 0);
      stmt.run(crypto.randomUUID(), 'Zweiter Beitrag', 'Casey', '2024-06-20', 'Details zum zweiten Treffen und seinen Auswirkungen.', 0);
      stmt.run(crypto.randomUUID(), 'Dritter Beitrag', 'Jordan', '2024-06-21', 'Erkenntnisse und Ergebnisse aus der dritten Diskussion.', 0);
      stmt.finalize();
      console.log('Database seeded with initial posts.');
    }
  });
});

// GET all posts (ordered by created_at)
app.get('/api/posts', (req, res) => {
  db.all('SELECT * FROM posts ORDER BY created_at', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET single post by id
app.get('/api/posts/:id', (req, res) => {
  db.get('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Post not found' });
    res.json(row);
  });
});

// POST create a new post
app.post('/api/posts', (req, res) => {
  const { title, author, date, summary, votes } = req.body;
  const id = crypto.randomUUID();
  db.run(
    'INSERT INTO posts (id, title, author, date, summary, votes) VALUES (?, ?, ?, ?, ?, ?)',
    [id, title, author, date, summary, votes || 0],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(row);
      });
    }
  );
});

// PUT update a post
app.put('/api/posts/:id', (req, res) => {
  const { title, author, date, summary, votes } = req.body;
  db.run(
    'UPDATE posts SET title = COALESCE(?, title), author = COALESCE(?, author), date = COALESCE(?, date), summary = COALESCE(?, summary), votes = COALESCE(?, votes) WHERE id = ?',
    [title, author, date, summary, votes, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Post not found' });
      db.get('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(row);
      });
    }
  );
});

// DELETE a post
app.delete('/api/posts/:id', (req, res) => {
  db.run('DELETE FROM posts WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ deleted: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
