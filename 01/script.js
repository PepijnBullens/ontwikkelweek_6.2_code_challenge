function calculate(integers) {
  if (integers.length === 0 || integers.length === 1) {
    return "error: voer twee getallen in";
  }
  for (let i = 0; i < integers.length; i++) {
    if (!Number.isInteger(integers[i])) {
      return "error: voer een getal in";
    }
  }
  let sum = 0;
  for (let i = 0; i < integers.length; i++) {
    sum += integers[i];
  }
  return sum;
}
