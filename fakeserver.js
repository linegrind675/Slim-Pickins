const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({

});

//connect
db.connect((err) => {
    if(err){
      throw err;
    }
    console.log('MySql Connected...');
});

const app =express();

//create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err,result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

app.listen('3000', () => {
  console.log('server started on port 3000');
});

