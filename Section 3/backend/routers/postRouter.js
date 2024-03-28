const express = require('express');
const router = express.Router();
const Model = require('../models/postModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('add response from post router');
});

router.get('/getall', (req, res) => {
    res.send('getall response from post router');
});

router.get('/delete', (req, res) => {
    res.send('delete response from post router');
});

router.get('/update', (req, res) => {
    res.send('update response from post router');
});

module.exports = router;