function calculate(sentence) {
  if (typeof sentence !== "string") {
    return "Only one sentence is allowed";
  }

  const wordLength = sentence.replace(/[^\p{L}\p{N}]/gu, "").length;
  const uppercaseCount = sentence.replace(/[^A-Z]/g, "").length;

  return [wordLength, uppercaseCount];
}
