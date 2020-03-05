const mongoose = require('mongoose');

//create schema
const TransactionSchema = new mongoose.Schema({
    // ID will be created automatically in mongodb
    text: {
        type: String,
        trim: true, //removes whitspace
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// export this to bring into our controller
module.exports = mongoose.model('Transaction', TransactionSchema)

//when we create a request to send data, it will only accept text/amount