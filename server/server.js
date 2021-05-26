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


//GET
client.connect();

const getEntireTable = (req, res) => {
  client.query('SELECT * FROM voting_app', (err, result) => {
    if (err) {
      console.log('SELECT', err);
      
    }
    res.send(result);
    client.end();
  });
};


client.connect();

const putUpdatedVotes = (req, res) => {
  const reqId = parseInt(req.body.id);
  client.query('UPDATE voting_app SET votes = votes + 1 WHERE id =  $1', [reqId], (err, psqlresponse) => {
    if (err) {
      console.log('UPDATE ', err);
   
    }
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
