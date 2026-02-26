const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "celafonb_celafonb",
  password: "#TargibSajid7&7",
  database: "celafonb_celastise"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
  } else {
    console.log("MySQL connected");
  }
});
module.exports = db;