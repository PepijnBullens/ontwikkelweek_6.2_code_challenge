function calculate(input) {
  const rules = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
  };

  let total = 0;
  let prevValue = 0;

  for (let char of input) {
    if (
      char !== "I" &&
      char !== "V" &&
      char !== "X" &&
      char !== "L" &&
      char !== "C"
    ) {
      throw new Error(
        "error: Een van de getallen is geen ondersteund romeins cijfer."
      );
    }

    let value = rules[char];
    if (value > prevValue) {
      total += value - 2 * prevValue;
    } else {
      total += value;
    }
    prevValue = value;
  }

  return total;
}

function romanInput(input) {
  const romanNumerals = input.split(" ");
  try {
    let result = romanNumerals.map(calculate);
    let total = result.reduce((a, b) => a + b, 0);
    return [result, total];
  } catch (error) {
    return error.message;
  }
}
