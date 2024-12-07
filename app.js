const express = require("express");

const app = express();

app.get("/ad", (req, res) => {
    res.json({
        status: 200,
        message: "Hello ADnhmm!"
    })
});

app.listen(3000, () => console.log("AD app is running on 3000"));