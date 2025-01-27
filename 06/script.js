function checkMissing(input) {
  let missingCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      missingCount++;
    } else if (input[i] === ")") {
      if (missingCount <= 0) return "Een haakje sluit te vroeg.";
      missingCount--;
    }
  }

  return missingCount === 0
    ? "Geen problemen gevonden."
    : "Er mist een sluitend haakje.";
}
