function parseMorse(input) {
  const rules = {
    "-": "T",
    "--": "M",
    ".-": "A",
    "-.": "N",
    "---": "O",
    ".": "E",
  };

  const words = input.split("/");
  words.forEach((element) => {
    const letters = element.split(" ");
    letters.forEach((letter) => {
      console.log(rules[letter]);
    });
    console.log(" ");
  });
}
