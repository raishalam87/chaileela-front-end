const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login_db' // ✅ Correct
});


db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Add user if not exists
const username = 'Raish';
const plainPassword = 'Raish@2025';

db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
  if (err) throw err;

  if (results.length === 0) {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    console.log('User Raish added');
  }
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).send('Server error');
    if (results.length === 0) return res.status(401).send('Invalid username or password');

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
});

app.listen(3008, () => {
  console.log('Server running on http://localhost:3008');
});
