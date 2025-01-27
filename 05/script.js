function calculateSteps(steps) {
  let forward = 0;
  let backward = 0;

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] === ">") forward++;
    if (steps[i] === "<") backward++;
  }

  return `Stappen voorwaarts: ${forward} -- Stappen achterwaarts: ${backward} -- Komt uit op: ${
    forward - backward
  }`;
}
