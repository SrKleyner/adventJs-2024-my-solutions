function isRobotBack(moves) {
  const especial = {
    "*L": "LL",
    "*R": "RR",
    "*U": "UU",
    "*D": "DD",
    "!L": "R",
    "!R": "L",
    "!U": "D",
    "!D": "U",
    "?L": "L",
    "?R": "R",
    "?U": "U",
    "?D": "D",
    L: "L",
    R: "R",
    U: "U",
    D: "D",
  };
  const robot = {
    x: 0,
    y: 0,
  };

  const directions = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
    LL: [-2, 0],
    RR: [2, 0],
    UU: [0, 2],
    DD: [0, -2],
  };
  const specialToSingleMove = [];
  const newArray = moves.split("");

  for (let i = 0; i < newArray.length; i++) {
    let singleMove = newArray[i + 1];
    if (
      /[\?]/.test(newArray[i]) &&
      (specialToSingleMove.includes(singleMove) || specialToSingleMove.includes(singleMove + singleMove))
    ) {
      i++
    }else if (/[\?\*\!]/.test(newArray[i])){
      specialToSingleMove.push(especial[newArray[i] + newArray[i + 1]]);
      const [x, y] = directions[especial[newArray[i] + newArray[i + 1]]]
      robot.x += x;
      robot.y += y;
      i++;
    } else {
      specialToSingleMove.push(especial[newArray[i]])
      const [x, y] = directions[especial[newArray[i]]]
      robot.x += x;
      robot.y += y;
    }
  }

  return robot.x === 0 && robot.y === 0 ? true : [robot.x, robot.y];
}

console.log(isRobotBack('UU!U?D'));

console.log(isRobotBack("RLUD"));
