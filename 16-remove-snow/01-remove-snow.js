function removeSnow(s) {
  let array = s.split("");
  let i = 0
  let j = array.length
  while (i < j) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 2)
      i = 0;
      j -= 2
    }else{i++}
  }
  return array.join('');
}

