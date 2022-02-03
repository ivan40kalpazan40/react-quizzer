const CategoryListItem = ({ category }) => {
  return (
    <a
      href={`/categories/${category.id}/${category.name}`}
      className='collection-item blue-text'
    >
      {category.name}
    </a>
  );
};

export default CategoryListItem;
