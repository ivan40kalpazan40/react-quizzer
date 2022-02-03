export const underscoreStringNormalizer = (string) => {
  return string
    .split('_')
    .map((x) => {
      return `${x[0].toUpperCase()}${x.slice(1)}`;
    })
    .join(' ');
};

export const replaceHTMLEntities = (string) => {
  if (string) {
    let output = string
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&euml;/g, 'ë')
      .replace(/&oacute;/g, 'ó')
      .replace(/&Uuml;/g, 'Ü');
    return output;
  }
};

export const randomizeArray = (string, arr) => {
  let initialArray = [string, ...arr];
  let shuffled = initialArray
    .map((x) => ({ x, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ x }) => x);

  return shuffled;
};
