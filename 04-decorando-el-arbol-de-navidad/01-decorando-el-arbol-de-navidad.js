function createXmasTree(height, ornament) {
  let xmasTree = "";

  for (let i = 1; i <= height; i++) {
    const wall = "_".repeat(height - i);
    xmasTree += `${wall}${ornament.repeat(i + (i - 1))}${wall}\n`;
  }
  const base = "_".repeat(height - 1);
  xmasTree += `${base}#${base}\n${base}#${base}`;

  return xmasTree;
}
