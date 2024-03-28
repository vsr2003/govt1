const mongoose = require('mongoose');

exports.connectToDb = async() => {
    try {

        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to db");
        
    } catch (error) {
        console.log("failedtoconnect with db");
        alert("error in dbconnnection");
    }
}

