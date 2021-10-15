const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const imporData = require("./data.json");


router.get("/", (req, res) => {
    res.send("Hello world")
});

router.get("/cities", (req, res) => {
    res.send(imporData)
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);