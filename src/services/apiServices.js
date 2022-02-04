export const getQuizzByCategoryAndDifficulty = (id, difficulty, amount) => {
  return fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${difficulty}`
  ).then((res) => res.json());
};

export const getCategoryInfoById = (id) => {
  return fetch(`https://opentdb.com/api_count.php?category=${id}`).then((res) =>
    res.json()
  );
};

export const getAllCategories = () => {
  return fetch(`https://opentdb.com/api_category.php`).then((res) =>
    res.json()
  );
};
