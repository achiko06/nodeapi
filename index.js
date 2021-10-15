const express = require("express");
const app = express();
const imporData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/cities", (req, res) => {
    res.send(imporData)
});

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`)
});