function decodeFilename(filename) {
  const match2 = filename.replace(/^[0-9]+/g, "");
  const match3 = match2.replace(/^[-._]+/, "");
  const matchPoint = match3.indexOf(".", match3.indexOf(".") + 1);
  const match4 = match3.slice(0, matchPoint);

  return match4;
}
