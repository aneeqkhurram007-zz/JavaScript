let check,
  num = 45;
console.log("\tPrime Numbers");
console.log("\nPrime Numbers are: ");
for (let i = 2; i < num; i++) {
  check = false;
  for (let k = 2; k < i; k++) {
    if (i % k == 0) {
      check = true;
      break;
    }
  }
  if (check == false) {
    console.log(i);
  }
}
