const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Successfully connected to the database');
    const result = await client.query('SELECT NOW()');
    console.log('Current time from database:', result.rows[0].now);
    client.release();
  } catch (err) {
    console.error('Error connecting to the database', err);
  } finally {
    await pool.end();
  }
}

testConnection();