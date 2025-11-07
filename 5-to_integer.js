const { argv } = require("node:process");

const arguments = argv.slice(2);
const myNumber = parseInt(arguments[0]);

if (myNumber) {
  console.log(`My number: ${myNumber}`);
} else {
  console.log("Not a number");
}
