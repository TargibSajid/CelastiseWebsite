const express = require("express");
const db = require("../config/db");

const router = express.Router();
router.get("/watches", (req, res) => {
   const sql = "SELECT p.name,p.product_id,p.price,pi.image_url,pi.color FROM products p LEFT JOIN product_images pi ON p.product_id = pi.product_id;";
      db.query(sql, (err, result) => {
            if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result);
      console.log(result);
    }
});
});

router.get("/watches/info", (req, res) => {
  const p = req.query.p;
    const sql = "SELECT p.name,p.dial,p.glass,p.watch_case,p.include,p.available_color,p.discount,p.stock,p.category_id,p.brand_id,p.gender,p.movement,p.strap_type,p.water_resistant,p.description,p.product_id,p.price,pi.image_url,pi.color FROM products p LEFT JOIN product_images pi ON p.product_id = pi.product_id WHERE p.product_id = ?";
    db.query(sql, [p], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(result);
        console.log("Fetched product:", result);
      }
    });
});


router.get("/watches/related", (req, res) => {
  const p = req.query.p;
    const sql = "SELECT p.name,p.product_id,p.price,pi.image_url,pi.color FROM products p LEFT JOIN product_images pi ON p.product_id = pi.product_id WHERE p.product_id IN (SELECT product_id FROM products WHERE category_id = (SELECT category_id FROM products WHERE product_id = ?)) AND p.product_id != ?";
    db.query(sql, [p,p], (err, result) => {
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
    const sql = "SELECT p.name,p.product_id,p.price,pi.image_url,pi.color FROM products p LEFT JOIN product_images pi ON p.product_id = pi.product_id WHERE LOWER(name) LIKE ?";
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