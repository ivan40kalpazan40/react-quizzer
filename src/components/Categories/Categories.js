import { useEffect, useState } from 'react';
import CategoryListItem from './CategoryListItem';
const Categories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((response) => setCategories(response.trivia_categories))
      .catch((err) => {
        console.error(err.message);
        setCategories(null);
      });
  }, []);
  return (
    <div className='container'>
      <div className='collection'>
        {categories &&
          categories.map((category, i) => (
            <CategoryListItem key={i} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
