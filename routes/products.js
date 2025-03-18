const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    res.json(db.products);
});

module.exports = router;
