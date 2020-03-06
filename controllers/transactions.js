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
    } catch (err) {
        // server error
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    // res.send('POST transactions')
    try {
        // this is the data sent to create a transaction
        // will only accept fields in our model
        const { text, amount } = req.body;
        // create is a mongoose method 
        const transaction = await Transaction.create(req.body);
        // 201 is success
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        // to prevent hang, don't just console log
        // console.log(err);
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            // 400 client/user error - did not send what they were meant to
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }

    }



}

// @desc delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
} 