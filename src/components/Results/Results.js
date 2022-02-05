import { Link } from 'react-router-dom';
import { useContext } from 'react';
import QuizzContext from '../../context/quizzContext/quizzContext';

const Results = () => {
  const { score, counter } = useContext(QuizzContext);
  return (
    <div className='container center'>
      <h1>You Failed</h1>
      <p>You answered {score} qusetions correctly</p>
      <p>Your average score is: {((score / counter) * 100).toFixed(2)} %</p>
      <p>Your overall score is 700</p>
      <Link to='/categories'>Play another quizz</Link>
    </div>
  );
};

export default Results;
