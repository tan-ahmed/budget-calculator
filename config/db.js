const mongoose = require('mongoose');

// returns promise
const connectDB = async () => {
    // catch any errors
    try {
        // use await or we need .then for connection string
        const conn = await mongoose.connect(encodeURI(process.env.MONGO_URI), {
            // prevent errors
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connect: ${conn.connection.host}`.cyan.underline.bold);
    } catch(err) {
        console.log(`Error: ${err.message}`.red);
        // shutdown app
        process.exit(1);
    }
}

module.exports = connectDB;