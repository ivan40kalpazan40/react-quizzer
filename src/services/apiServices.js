export const getQuizzByCategoryAndDifficulty = (id, difficulty, amount) => {
  return fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${difficulty}`
  ).then((res) => res.json());
};
