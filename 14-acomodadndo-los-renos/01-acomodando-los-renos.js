function minMovesToStables(reindeer, stables) {
  const ordenatedReinder = reindeer.sort((a, b) => a - b);
  const ordenatedStables = stables.sort((a, b) => a - b);
  return ordenatedStables.reduce(
    (acum, current, index) =>
      (acum += Math.abs(current - ordenatedReinder[index])),
    0
  );
}

