function calculate() {
  fetch("input.txt")
    .then((res) => res.text())
    .then((text) => {
      const lines = text
        .split("\n")
        .map((line) => (line.trim() === "" ? null : line));

      let count = 0;
      let costs = [];

      lines.forEach((line) => {
        if (line == null) count++;
        else {
          costs[count] =
            (costs[count] || 0) + parseFloat(line.replace(",", "."));
        }
      });

      console.log(Math.max(...costs));
    })
    .catch(() => console.log("error: dit bestand bestaat niet!"));
}

calculate();
