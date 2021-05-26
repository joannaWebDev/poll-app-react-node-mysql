'use strict';
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

const path = require('path');
/* =====================================================================================
SQL                   
====================================================================================*/
/* const { Pool } = require('pg'); */
/* const secrets = require('./secrets.json'); */

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

/* =====================================================================================
body parser configuration                        
====================================================================================*/
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
/* =====================================================================================
request the path API and serve static files from the client build folder.                  
====================================================================================*/
app.use(express.static(path.join(__dirname, '../client/build')));
const PORT = process.env.PORT || 5000;

/* const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'vote_app',
  password: 'mcl6S%59',
  port: 5432,
  max: 10, // max number of clients in the pool
}); */

//GET


/* client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
}); */

client.connect();

const getEntireTable = (req, res) => {
 /*  pool.query(`SELECT * FROM vote_app.voting_app`, (err, result) => {
    if (err) {
      console.log('SELECT', err);
      return;
    }
    res.send(result);
  }); */
  client.query('SELECT * FROM vote_app.voting_app', (err, result) => {
    if (err) throw err;
  /*  for (let row of res.rows) {
      console.log(JSON.stringify(row));
    } */
    res.send(result);
    client.end();
  });
};


client.connect();

const putUpdatedVotes = (req, res) => {
/*  const reqId = parseInt(req.body.id);
  pool.query(`UPDATE vote_app.voting_app SET votes = votes + 1 WHERE id =  $1`, [reqId], (err, psqlresponse) => {
    if (err) {
      console.log('UPDATE ', err);
      return;
    }
    getEntireTable(req, res);
  }); */

  client.query('UPDATE vote_app.voting_app SET votes = votes + 1 WHERE id =  $1', [reqId], (err, result) => {
    if (err) throw err;
  /*  for (let row of res.rows) {
      console.log(JSON.stringify(row));
    } */
    getEntireTable(req, res);
    client.end();
  });
}; 

/* =====================================================================================
ENDPOINTS 
====================================================================================*/
app.get('/poll', getEntireTable);
app.put('/poll', putUpdatedVotes);

app.listen(PORT, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
