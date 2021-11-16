const mysql = require("mysql");

//database object
const dataBaseConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "property",
};

//create the database connection
const con = mysql.createConnection(dataBaseConfig);

//connect to the database
con.connect((error) => {
  if (error) {
    console.log("Error connecting to database mysql");
  } else {
    console.log("Database connection successful");
  }
});

module.exports = con;
