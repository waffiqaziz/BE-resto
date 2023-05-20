import mysql from 'mysql2';

// create the connection to database
// test

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_restaurant',
});

db.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

export default db;