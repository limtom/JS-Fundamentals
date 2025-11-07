const args = process.argv[2];

if (parseInt(args)) {
  for (let i = 0; i < args; i++) {
    let row = "";
    for (let j = 0; j < args; j++) {
      row += "X";
    }
    console.log(row);
  }
} else {
  console.log("Missing size");
}
