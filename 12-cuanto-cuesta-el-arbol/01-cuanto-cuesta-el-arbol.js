function calculatePrice(ornaments) {
  let total = 0;
  const priceList = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  for (let i = 0; i < ornaments.length; i++) {
    if (~~priceList[ornaments[i + 1]] > priceList[ornaments[i]]) {
      total += -priceList[ornaments[i]];
    } else {
      total += priceList[ornaments[i]];
    }
  }
  return total || undefined;
}
