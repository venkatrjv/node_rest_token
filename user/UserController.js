var express = require('express');
var router = express.Router();
var User = require('./User');
const Joi = require('@hapi/joi');

// ──────────────────────────────────────────────────────── VALIDATION SCHEMA ─────
const schema = Joi.object().keys({
    fName: Joi.string().required(),
    lName: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid(["Male", "Female"]).required(),
});

// ─────────────────────────────────────────────────────── CREATES A NEW USER ─────
router.post('/', function (req, res) {
    try {
        // validating req body with schema
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).send(result.error);
        }
        User.addUser(req.body, function (err, rows) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send({
                message: 'Person saved successfully!'
            });
        });
    } catch (error) {
        return res.status(500).send("Error while processing your request.");
    }
});


// ─────────────────────────────────────────── GETS A USERS FROM THE DATABASE ─────
router.get('/', function (req, res) {
    try {
        User.getAllUser(function (err, rows) {
            if (err) {
                // res.status(500).json(err)
                return next(err);
            } else {
                return res.json(rows)
            }
        });
    } catch (error) {
        return res.status(500).send("Error while processing your request.");
    }

});


module.exports = router;