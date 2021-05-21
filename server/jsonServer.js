'use strict';
const express = require("express");
const cors = require("cors");
const path = require("path");

const bodyParser = require("body-parser");//TODO delete after db set-up
const fs = require("fs");//TODO delete after db set-up

const app = express();
app.use(cors());
app.use(bodyParser.json());

//request the path API and serve static files from the client build folder.
app.use(express.static(path.join(__dirname, '../client/build')));

const PORT = process.env.PORT || 6000 ;

const pollData = require("./data.json");

app.get("/test", (req, res) => {
    res.send(pollData);
});

app.post("/test", (req, res) =>{
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
