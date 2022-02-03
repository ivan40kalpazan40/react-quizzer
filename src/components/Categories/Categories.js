import { useEffect, useState } from 'react';
import CategoryListItem from './CategoryListItem';
const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((response) => {
        setCategories(response.trivia_categories);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setCategories(null);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='container'>
          <div className='collection'>
            {categories &&
              categories.map((category, i) => (
                <CategoryListItem key={i} category={category} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
