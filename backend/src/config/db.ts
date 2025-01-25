import config from './env.var.config';
import { Pool } from 'pg';

const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

export const connectDB = async () => {
  try {
    await pool.query('SELECT NOW()'); // Test database connection
    console.log('Connected to PostgreSQL database');
  } catch (err) {
    console.error('PostgreSQL connection failed', err);
  }
};

export default pool;
