require("./db");

const User = require("./usermodel");

async function run() {

    // CREATE
    const newUser = new User({
        name: "Ark",
        age: 21,
        email: "ark@email.com"
    });

    await newUser.save();
    console.log("User created");

    // READ
    const users = await User.find();
    console.log("All users:", users);

    // UPDATE
    await User.updateOne(
        { name: "Ark" },
        { age: 22 }
    );
    console.log("User updated");

    // DELETE 
    await User.deleteOne({ name: "Ark" });
    console.log("User deleted"); //*

}

run();