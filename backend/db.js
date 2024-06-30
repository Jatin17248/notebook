const mongoose = require("mongoose");
const mongooseUri = "mongodb://localhost:27017/notebook";
const connectToMongo = async() =>{
    await mongoose.connect(mongooseUri)
    console.log("Connected SuccesFully to mongo");
}


module.exports = connectToMongo;