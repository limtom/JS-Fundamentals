const { argv } = require("node:process");

const args = argv.slice(2);
// const validArgs = parseInt(args[0]);
if (parseInt(args[0])) {
  for (const i = 0; i < args[0]; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
