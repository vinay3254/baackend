const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    email: {
        type: String,
        required: true
    }
});

// Hook example
userSchema.pre("save", function(){
    console.log("User is about to be saved");
   
});

const User = mongoose.model("User", userSchema);

module.exports = User;