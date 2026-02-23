const express = require("express");
const db = require("../config/db");

const router = express.Router();
router.get("/watches", (req, res) => {
   const sql = "SELECT product_id,name,price FROM products";
      db.query(sql, (err, result) => {
            if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result);
    }
});
});

router.get("/watches/info", (req, res) => {
  const p = req.query.p;
    const sql = "SELECT * FROM products WHERE product_id = ?";
    db.query(sql, [p], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});

router.get("/watches/medium", (req, res) => {
    const sql = "SELECT * FROM products WHERE price BETWEEN ? AND ?";
    db.query(sql, [1000,2000], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});

router.get("/watches/high", (req, res) => {
    const sql = "SELECT * FROM products WHERE price > ?";
    db.query(sql, [1999], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});

router.get("/watches/low", (req, res) => {
    const sql = "SELECT * FROM products WHERE price < ?";
    db.query(sql, [1000], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});

router.get("/watches/search", (req, res) => {
  const name = req.query.name;
    const sql = "SELECT * FROM products WHERE LOWER(name) LIKE ?";
    db.query(sql, [`${name}%`], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});

module.exports = router;