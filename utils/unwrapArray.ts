export default <T>(el: T | T[]) => {
  if (Array.isArray(el)) {
    return el[0];
  }
  return el;
};
