const args = process.argv.slice(2);

function add(a, b) {
  if (parseInt(a) && parseInt(b)) {
    return +a + +b;
  } else {
    return "NaN";
  }
}
console.log(add(args[0], args[1]));
