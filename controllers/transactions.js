// all the methods will use our model to interact with the DB

// bring model in to controller
const Transaction = require('../models/Transactions')



// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    // res.send('GET transactions')
    try {
        const transactions = await Transaction.find();
        // 200 means ok
        return res.status(200).json({
            // construct api
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch(err) {
        // server error
        return res.send(500).json({
            sucess: false,
            error: 'Server error'
        });
    }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transactions')
}

// @desc delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
} 