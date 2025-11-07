const { argv } = require("node:process");

argv.forEach((val, index) => {
  if (argv.length === 2) {
    console.log("No argument");
  } else if (argv.length > 2 && argv.length < 4) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
});
