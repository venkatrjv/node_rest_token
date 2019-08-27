var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var user = require("./user/UserController");

// ───────────────────────────────────────────────────────────── CROSS ORIGIN ─────
app.use(cors());

//
// ──────────────────────────────────────────────────────────── PARSE REQUEST DATA ─────
app.use(bodyParser.json());

// ──────────────────────────────────────────────────── VALIDATION AUTH TOKEN ─────
app.use('/', function (req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === 'Bearer 1Br4RPWEqvSB9pkox1Q6') {
        // token successfully matched
        next();
        return;
    }
    // if token is invalid
    res.status(401).send("Invalid token.")
});

app.use("/user", user);

//
// ───────────────────────────────────────────────────────────────── LISTENER ─────
app.listen("4222", function (err, rows) {
    if (err) {
        res.json(err);
    } else {
        console.log("Server Started..");
    }
});

module.exports = app;