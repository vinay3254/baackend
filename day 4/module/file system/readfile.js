const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf-8");

console.log(data);