function drawTable(data) {
  //obteniendo las keys
  const keysOfData = Object.keys(data[0]);
  const width = keysOfData.length;
  
  //ancho de cada columna
  //contenido de cada columna
  const columnContent = [];
  const weigthElemntOfcolumns = keysOfData.map((key) => {
    let lengthOfKey = key.length;
    const columnAcum = [];
    const widthColumn = data.reduce((acum, element) => {
      columnAcum.push(element[key]);
      return String(element[key]).length > acum
        ? String(element[key]).length
        : acum;
    }, lengthOfKey);
    columnContent.push(columnAcum);
    return widthColumn;
  });
  const rowsSize = columnContent[0].length
  const line =
    weigthElemntOfcolumns.map((element) => `+${"-".repeat(element + 2)}`).join("") +
    "+";
  const linesWithFrames = []
  for (let i = 0; i < rowsSize; i++) {
    let frame = ''
    for (let j = 0; j < width; j++) {
      frame += `| ${String(columnContent[j][i])}${' '.repeat((weigthElemntOfcolumns[j]) - String(columnContent[j][i]).length)} ` 
    };
    frame += '|'
    linesWithFrames.push(frame)
  }

  //primera letra en mayuscula
  const titles = keysOfData.map(
    (element, i) => `| ${element.charAt(0).toUpperCase() + element.slice(1) + ' '.repeat(weigthElemntOfcolumns[i] - element.length)} `
  );
  return `${line}\n${titles.join('')}|\n${line}\n${linesWithFrames.join('\n')}\n${line}`
}

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);

// console.log(
//   drawTable([
//     { gift: "Doll", quantity: 10 },
//     { gift: "Book", quantity: 5 },
//     { gift: "Music CD", quantity: 1 },
//   ])
// );

// console.log(
//   drawTable([
//     { id: "midugato", isCat: true },
//     { id: "miduperro", isCat: false },
//   ])
// );
