 const express = require("express");


const app = express();

// route (URL path)
app.get("/", (req, res) => {
    res.send("Hello World from Express.....!");
});

// start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
