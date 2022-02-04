import { useEffect, useState, useContext } from 'react';
import QuizzContext from '../../context/quizzContext/quizzContext';
import CategoryListItem from './CategoryListItem';
const Categories = () => {
  const { loading, categories, getCategories } = useContext(QuizzContext);
  useEffect(() => {
    getCategories();
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
