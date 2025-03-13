function createFrame(names) {
  const longest = names.reduce(
    (acc, name) => (name.length > acc ? name.length : acc),
    0
  );
  const framedNames = names.map((name) => {
    const spaces = " ".repeat(longest - name.length);
    return `* ${name}${spaces} *\n`;
  });
  const frame = "*".repeat(longest + 4);
  //framedNames.push(frame);
  //framedNames.unshift(`${frame}\n`);

  return `${frame}\n` + framedNames.join('') + frame;
}

console.log(createFrame(["Hello", "World", "in", "a", "frame"]));
