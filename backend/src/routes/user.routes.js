const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/users", (req, res) => {
   const sql = "SELECT * FROM users";
      db.query(sql, (err, result) => {
            if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result);
    }
});
});


router.post("/users/create", (req, res) => {
   
    const { fullName, email, phoneNumber, gender, password } = req.body;
   const sql = "INSERT INTO users (full_Name, email, phone, gender, password) VALUES (?, ?, ?, ?, ?)";
   db.query(sql, [fullName, email, phoneNumber, gender, password], (err, result) => {
      if (err) {
         res.status(500).json({ message: "Error creating user or already used email or phone number." });
      } else {
         res.json({ message: "Registration successful"});
      } 
    });
});



router.post("/users/login", (req, res) => {
   const { email, password } = req.body;
   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
   db.query(sql, [email, password], (err, result) => {
      if (err) {
         res.status(500).json({ message: "Error during login." });
      } else {
         if (result.length > 0) {
            res.json({ message: "Login successful" });
         } else {
            res.status(401).json({ message: "Invalid email or password." });
         }
      }
   });
});

module.exports = router;


