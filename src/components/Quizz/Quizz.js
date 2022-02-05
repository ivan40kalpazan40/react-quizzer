import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  replaceHTMLEntities,
  randomizeArray,
  parametarizer,
} from '../../config/util.config';
import QuizzContext from '../../context/quizzContext/quizzContext';

const Quizz = () => {
  const { id, difficulty } = useParams();
  const navigate = useNavigate();

  const {
    quizz,
    loading,
    counter,
    score,
    info,
    scoreUp,
    countUp,
    resetCounter,
    getQuizz,
  } = useContext(QuizzContext);

  useEffect(() => {
    getQuizz(id, difficulty, parametarizer(15, difficulty, info));
    console.log(`quizzEffect `, quizz);
  }, []);

  const countHandler = (e) => {
    if (counter < parametarizer(15, difficulty, info) - 1) {
      countUp();
    } else {
      // resetCounter();
      navigate('/results');
    }
  };

  const clickToAnswerHandler = (e) => {
    if (
      replaceHTMLEntities(e.target.textContent) ===
      replaceHTMLEntities(quizz[counter].correct_answer)
    ) {
      scoreUp();
    }
    console.log(e.target.textContent);
    countHandler();
  };

  return (
    <div className='container center'>
      <h1>Quizz</h1>
      <p>
        question {counter + 1}/{parametarizer(15, difficulty, info)}
      </p>
      <p>Score: {score}</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : quizz.length > 0 ? (
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4>{replaceHTMLEntities(quizz[counter]?.question)}</h4>
          </li>
          {randomizeArray(
            quizz[counter].correct_answer,
            quizz[counter].incorrect_answers
          ).map((answer, i) => (
            <li className='collection-item' key={i}>
              <a href='#!' onClick={clickToAnswerHandler}>
                {replaceHTMLEntities(answer)}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={countHandler}>Next</button>
    </div>
  );
};

export default Quizz;
