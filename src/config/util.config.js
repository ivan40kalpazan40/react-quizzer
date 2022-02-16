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
      .replace(/&rsquo;/g, '’')
      .replace(/&prime;/g, '′')
      .replace(/&Prime/g, '″')
      .replace(/&euml;/g, 'ë')
      .replace(/&oacute;/g, 'ó')
      .replace(/&Uuml;/g, 'Ü')
      .replace(/&eacute;/g, 'é')
      .replace(/&iacute;/g, 'í')
      .replace(/&Iacute;/g, 'Í')
      .replace(/&Aacute;/g, 'Á')
      .replace(/&aacute;/g, 'á');
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

export const parametarizer = (numberInput, difficulty, info) => {
  switch (difficulty) {
    case 'easy':
      return info.total_easy_question_count >= numberInput
        ? numberInput
        : info.total_easy_question_count;

    case 'medium':
      return info.total_medium_question_count >= numberInput
        ? numberInput
        : info.total_medium_question_count;
    case 'hard':
      return info.total_hard_question_count >= numberInput
        ? numberInput
        : info.total_hard_question_count;
  }
};

export const evaluateScore = (score) => {
  return score > 89
    ? 'Excellent'
    : score > 75
    ? 'Very Good'
    : score > 50
    ? 'You Passed'
    : 'You Failed';
};
