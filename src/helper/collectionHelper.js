export const sort = (array, extractor, invert) => array.sort((a, b) => {
  const propA = extractor(a);
  const propB = extractor(b);
  if (propA < propB) {
    return invert ? 1 : -1;
  }
  if (propA > propB) {
    return invert ? -1 : 1;
  }
  return 0;
});
