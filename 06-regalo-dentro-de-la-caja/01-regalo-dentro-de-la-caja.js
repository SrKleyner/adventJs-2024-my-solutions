function inBox(box) {
  const boxWidth = box[0].length;
  const gift = box.slice(1, box.length - 1).join('').indexOf('*');
  const giftUbicationX = (gift % boxWidth);
  
  return (giftUbicationX > 0 && giftUbicationX < boxWidth - 1);
}