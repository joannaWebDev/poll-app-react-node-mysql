'use strict';
const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const secrets = require('./secrets.json');

const bodyParser = require("body-parser");//TODO delete after db set-up
const fs = require("fs");//TODO delete after db set-up

const app = express();
app.use(cors());
app.use(bodyParser.json());

//request the path API and serve static files from the client build folder.
app.use(express.static(path.join(__dirname, '../client/build')));

const PORT = process.env.PORT || 5000 ;

const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password: secrets.password,
  database:"vote_app",
  connectionLimit : 10, //important
  debug    :  false
}) 


const pollData = require("./data.json");

/*IMPORTANT just for testing sql */
app.get("/", (req, res) =>{
 /*  const sqlInsert = "INSERT INTO `voting_app` (`votes`, `name`) VALUES (0, 'Gift Two');"
  db.query(sqlInsert,( err, result) => {
    res.send('hello');
    console.log(err);
  }) */

  const sqlInsert = "INSERT INTO `voting_app` (`votes`, `name`) VALUES (0, 'Gift Two');"
  db.query(sqlInsert,( err, result) => {
    res.send('hello');
    console.log(err);
  })
}); 

/*app.get("/", (req, res) => {
  db
  .query("SELECT * FROM `voting_app`")
  .then(result => res.send('ok'))
  .catch(error => {
      console.log(error);
      res.send('Oops.Try again please 😕')
    })
  }
); 

*/

app.get("/poll", (req, res) => {
    res.send(pollData);
});


/*FIXME
app.post("/test", (req, res) => {
  const query = "SELECT count(*) FROM  `voting_app` WHERE `option`='Gift One';"

  db
  .query(query)
  .then(() => response.send("😉"))
  .catch(error => {
    console.log(error);
    res.send('Oops.We did it again. 😕')
  }) 
})
*/

app.post("/poll", (req, res) =>{
  if (req.body) {
    fs.writeFileSync("data.json", JSON.stringify(req.body));  
    res.send({
      message: "Data Saved",
    });
  } else {
    res.status(400).send({
      message: "Error No Data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


//https://gist.github.com/phsamuel/e0889440b8fbaa5362283d7b8a72e6c6