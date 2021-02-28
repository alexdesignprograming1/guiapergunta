const Sequelize = require('sequelize');

 const connection= new Sequelize('guiaperguntas', 'root', '987654', {
   host: 'localhost',
   dialect: 'mysql'
 });

 module.exports = connection;
