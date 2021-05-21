'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const secrets = require('./secrets.json');0.

const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

//request the path API and serve static files from the client build folder.
app.use(express.static(path.join(__dirname, '../client/build')));

const PORT = process.env.PORT || 5000;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: secrets.password,
  database: 'vote_app',
  connectionLimit: 10, //important
  debug: false,
});


//GET
const getEntireTable = (req, res) => {
  db.query(`SELECT * FROM voting_app`, (err, result) => {
    if (err) {
      console.log('Oops, our junior developer did it again 🙄', err);
    }
    res.send(result);
  });
};

const putUpdatedVotes = (req, res) =>{
  db.query(`UPDATE voting_app SET votes = votes + 1 WHERE id = ?`, [req.body.id], (err, result) => {
    if (err) {
      console.log('Oops, our junior developer did it again 🙄', err);
    }
  getEntireTable(req, res);
  })

  
};


/* =====================================================================================
ENDPOINTS 
====================================================================================*/
app.get('/poll', getEntireTable);
app.put("/poll", putUpdatedVotes);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});







