/**
* @Author: BingWu Yang <detailyang>
* @Date:   2016-04-07T17:52:53+08:00
* @Email:  detailyang@gmail.com
* @Last modified by:   detailyang
* @Last modified time: 2016-04-07T18:23:47+08:00
* @License: The MIT License (MIT)
*/


const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/*", function (req, res) {
  res.send("Hello World!");
});

app.post("/*", function (req, res) {
  console.log("123123");
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("cas-gitlab listening on port 3000!");
});
