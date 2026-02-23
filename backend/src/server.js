const app = require("./app");
require("dotenv").config();

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
