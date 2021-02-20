const mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
connection = mysql.createConnection({
  host: 'ao9moanwus0rjiex.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'kaoffaivrbnsor0w',
  password: 'lomalmxde3p0xg6n',
  database: 'jqy7n7t5kbxchun1'
});
}
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;