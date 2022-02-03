import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { underscoreStringNormalizer } from '../../config/util.config';

const Category = () => {
  const { id, name } = useParams();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://opentdb.com/api_count.php?category=${id}`)
      .then((res) => res.json())
      .then((response) => {
        setInfo(response.category_question_count);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='container'>
          <ul className='collection with-header with-label'>
            <li className='collection-header'>
              <h4>{name}</h4>
            </li>

            {Object.keys(info).map((key) => {
              return (
                <li className='collection-item blue-grey-text' key={key}>
                  <a href='#!'>
                    <span className='teal badge white-text'>{info[key]}</span>
                    {underscoreStringNormalizer(key)}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link
            to={`/quizz/${id}/easy`}
            className='waves-effect waves-light btn-large'
          >
            Play Easy Quizz
          </Link>
          <Link
            to={`/quizz/${id}/medium`}
            className='waves-effect waves-light btn-large'
          >
            Play Medium Quizz
          </Link>
          <Link
            to={`/quizz/${id}/hard`}
            className='waves-effect waves-light btn-large'
          >
            Play Hard Quizz
          </Link>
        </div>
      )}
    </>
  );
};

export default Category;