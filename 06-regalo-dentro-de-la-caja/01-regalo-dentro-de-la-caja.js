function inBox(box) {
  const boxSize = box.length;
  const boxWidth = box[0].length;
  const gift = box.join('').indexOf('*');
  const giftUbicationY = ~~(gift / boxWidth);
  const giftUbicationX = (gift % boxWidth);
  if (giftUbicationY > 0 && giftUbicationY < boxSize - 1 && giftUbicationX > 0 && giftUbicationX < boxWidth - 1) {
    return true;
  }
  return false;
}