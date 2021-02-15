const mysql = require("mysql");
const connection = mysql.createConnect({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "emmahuski1",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });
  
module.exports = connection;
