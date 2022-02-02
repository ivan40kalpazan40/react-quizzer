const CategoryListItem = ({ category }) => {
  return (
    <a href='/categories/id/name' className='collection-item blue-text'>
      {category.name}
    </a>
  );
};

export default CategoryListItem;
