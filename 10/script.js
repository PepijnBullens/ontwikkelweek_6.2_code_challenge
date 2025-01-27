function checkPrimeNumber(input) {
  if (input < 2) {
    return false;
  }

  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
