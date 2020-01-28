const express = require("express");
const path = require("path");
const cors = require('cors');

const temperature = require("./data/temperature.json");
const precipitation = require("./data/precipitation.json");

const port = process.env.PORT || "8000";

const app = express();
app.use(cors());

app.get("/temperatures", (req, res) => {
    res.status(200).send({ temperature });
});
app.get("/precipitations", (req, res) => {
    res.status(200).send({ precipitation });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});