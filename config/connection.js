const express = require('mysql');
const connection = mysql.createConnect({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

connection.connect((err) => {