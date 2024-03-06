// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
  const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'companydb'
      });

  const getConexion = async() => await conexion
  module.exports = {getConexion}