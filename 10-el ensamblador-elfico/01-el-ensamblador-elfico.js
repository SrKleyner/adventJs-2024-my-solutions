function compile(instructions) {
  const newInstructions = instructions.map(
    (instruction) => instruction.split(" ")
  );
  const registrosDeDatos = {};
  let i = 0;
  const registro = {
    MOV: (x, y) => {
      registrosDeDatos[y] = registrosDeDatos[x] ?? Number(x);
    },
    INC: (x) => {
      registrosDeDatos[x] = ~~registrosDeDatos[x] + 1;
    },
    DEC: (x) => {
      registrosDeDatos[x] = ~~registrosDeDatos[x] - 1;
    },
    JMP: (x, y) => {
      !registrosDeDatos[x] ? (i = y - 1) : undefined;
    },
  };
  for (i = 0; i < newInstructions.length; i++) {
    const [operation, x, y] = newInstructions[i];
    registro[operation](x, y);
  }
  return registrosDeDatos.A;
  }