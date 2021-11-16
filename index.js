const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
//middlewere

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  //   let SQLQuery =
  //     "INSERT INTO `property_list`(`propertyname`, `name`, `location`, `phone`) VALUES ('Resort Valley Ocs','Rafiqul islam','Dhanmondi','01700000')";
  //   db.query(SQLQuery, (err, result) => {
  //     if (err) {
  //       console.log("data insert fail");
  //     } else {
  //       console.log("data insert success");
  //     }
  //   });

  res.send("welcome to node+MySql project");
});

app.get("/property", (req, res) => {
  const sqlGet = "SELECT * FROM property_list";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/property", (req, res) => {
  const propertyname = req.body.propertyname;
  const name = req.body.name;
  const location = req.body.location;
  const phone = req.body.phone;
  const SQLQuery =
    "INSERT INTO property_list (propertyname, name, location, phone) VALUES(?,?,?,?)";
  db.query(SQLQuery, [propertyname, name, location, phone], (err, result) => {
    console.log(result);
  });
});

app.delete("/property/:name", (req, res) => {
  const name = req.params.name;
  const sqlDelet = "DELETE FROM property_list WHERE name = ?";
  db.query(sqlDelet, name, (err, result) => {
    console.log(err);
  });
});

app.put("/update", (req, res) => {
  const propertyname = req.body.propertyname;
  const name = req.body.name;
  const location = req.body.location;
  const phone = req.body.phone;
  const id = req.body.id;
  const sqlUpdate =
    // "UPDATE `property_list` SET `propertyname`=[propertyname],`name`=[name],`location`=[location],`phone`=[phone] WHERE 1";
    "UPDATE property_list SET propertyname = ? , name = ? , location = ? , phone = ? WHERE id = ?";
  db.query(sqlUpdate, [propertyname, name, location, phone, id], (err, res) => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log("running server", port);
});
