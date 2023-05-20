import mysql from 'mysql2';

// create the connection to database
// test

const db = mysql.createConnection({
  host: '34.70.96.245',
  user: 'admin',
  password: '49Hwm2DQ0^Y7mYu|',
  database: 'db_restaurant',
});

db.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

export default db;