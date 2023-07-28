const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const con = mysql.createConnection({
  host: "lab.uzlabina.cz",
  user: "kubalmi",
  password: "9072xdd08",
  database: "kubalmi",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.listen(7883, () => {
  console.log("Server is running");
});

app.get("/fetch", (req, res) => {
  con.query("SELECT * FROM `DMP_data`", function(err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(JSON.stringify(result)));
    }
  });
});
app.get("/productDetail/:productDetailId", (req, res) => {
  const productDetailId = req.params.productDetailId;
  if (!productDetailId) {
    return res.status(400).send("Missing URL parameter: productDetailId");
  }

  con.query(
    `SELECT * FROM DMP_data WHERE Id = ${productDetailId}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
