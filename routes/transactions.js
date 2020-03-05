// use router
const express = require("express");
const router = express.Router();
// pull out getTransactions from Controller
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions')

// anytime you make a request to '/'
router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

module.exports = router;