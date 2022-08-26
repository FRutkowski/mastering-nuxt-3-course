export default (...args: string[]) => {
  return args
    .map((arg) => arg.replaceAll(/\s+/g, '-').toLowerCase())
    .join('-');
};
