const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const app = express();

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

// app.get("/fetch", (req, res) => {
//   return res.json("From backend side");
// });

// app.get("/eshop", (req, res) => {
//   const sql = "SELECT * FROM `DMP_data`";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.listen(7883, () => {
  console.log("Server is running");
});

app.get("/fetch", (req, res) => {
  con.query("SELECT * FROM `DMP_data`", function(err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      // res.send(result);
      // console.log(result);
      res.send(JSON.parse(JSON.stringify(result)));
    }
  });
});
app.get("/productDetail/:productDetailId", (req, res) => {
  const productDetailId = req.params.productDetailId;
  // console.log("hello");
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

// app.listen(4000, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("on port 4000");
//   }
// });
