const { argv } = require("node:process");

const arguments = argv.slice(2);
console.log(`${arguments[0]} is ${arguments[1]}`);
