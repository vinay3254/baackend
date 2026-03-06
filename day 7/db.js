const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Connection error:", err);
});