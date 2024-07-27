const db = require('../db');
const bcrypt = require('bcryptjs');

const findUserById = async (id) => {
  const query = 'SELECT id, username, email FROM users WHERE id = $1';
  const result = await db.query(query, [id]);
  return result.rows[0];
};

const saveResetToken = async (userId, token) => {
  const query = 'UPDATE users SET reset_token = $1, reset_token_expires = NOW() + INTERVAL \'1 hour\' WHERE id = $2';
  await db.query(query, [token, userId]);
};

const userModel = {
  async createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email';
    const values = [username, email, hashedPassword];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  async getAllUsers() {
    const query = 'SELECT id, username, email FROM users';
    const result = await db.query(query);
    return result.rows;
  },

  findUserById,

  saveResetToken,
};

module.exports = userModel;
