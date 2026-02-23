const express = require("express");
const db = require("../config/db");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const router = express.Router();

router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    console.log("Google user info:", { email, name, picture });

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error during login." });
      }

      if (result.length > 0) {
        req.session.user = { email, name };
        return res.status(200).json({ message: "Login successful" });
      } else {
        const sql2 = "INSERT INTO users (full_name, email) VALUES (?, ?)";

        db.query(sql2, [name, email], (err2) => {
          if (err2) {
            return res.status(500).json({ message: "Error during registration." });
          }

          req.session.user = { email, name };
          return res.status(200).json({ message: "Registration successful" });
        });
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Invalid Google token" });
  }
});

module.exports = router;