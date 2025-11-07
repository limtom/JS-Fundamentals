const args = process.argv[2];

function factorial(num) {
  if (parseInt(num)) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  } else return 1;
}
console.log(factorial(parseInt(args)));
