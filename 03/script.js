function readFile() {
  fetch("input.txt")
    .then((res) => res.text())
    .then((text) => {
      console.log(text);
    })
    .catch(() => console.log("error: dit bestand bestaat niet!"));
}
