import { Link } from 'react-router-dom';
const CategoryListItem = ({ category }) => {
  return (
    <Link
      to={`/categories/${category.id}/${category.name}`}
      className='collection-item blue-text'
    >
      {category.name}
    </Link>
  );
};

export default CategoryListItem;
