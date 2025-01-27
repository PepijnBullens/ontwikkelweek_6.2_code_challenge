function calculate(input) {
  const parsedInput = input.split(" ");

  let closest = null;
  let closestPair = null;
  for (let i = 0; i < parsedInput.length; i++) {
    for (let j = 0; j < parsedInput.length; j++) {
      if (i !== j) {
        const distance = Math.abs(parsedInput[i] - parsedInput[j]);
        if (closest === null || distance < closest) {
          closest = distance;
          closestPair = [parsedInput[i], parsedInput[j]];
        }
      }
    }
  }
  return closestPair;
}
