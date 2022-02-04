import { useParams, Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import QuizzContext from '../../context/quizzContext/quizzContext';
import { underscoreStringNormalizer } from '../../config/util.config';

const Category = () => {
  const { id, name } = useParams();
  const { loading, info, getInfo } = useContext(QuizzContext);

  useEffect(() => {
    getInfo(id);
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
                  <span className='teal badge white-text'>{info[key]}</span>
                  {underscoreStringNormalizer(key)}
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
