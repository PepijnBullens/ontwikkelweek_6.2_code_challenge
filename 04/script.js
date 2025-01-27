function createPiramid(size) {
  if (size < 3 || size > 20) {
    return "Size must be between 3 and 20";
  }

  if (!Number.isInteger(size)) {
    return "Size must be an integer";
  }

  for (let y = 0; y < size; y++) {
    let row = "";
    for (let x = 0; x < size + 1; x++) {
      if (x < size - y - 1) {
        row += ".";
      } else {
        row += "#";
      }
    }
    console.log(row);
  }
}
