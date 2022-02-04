import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { replaceHTMLEntities, randomizeArray } from '../../config/util.config';
import { getQuizzByCategoryAndDifficulty } from '../../services/apiServices';
import QuizzContext from '../../context/quizzContext/quizzContext';

const Quizz = () => {
  const { id, difficulty } = useParams();
  // const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const { quizz, loading, counter, countUp, getQuizz } =
    useContext(QuizzContext);

  useEffect(() => {
    // setLoading(true);
    getQuizz(id, difficulty, 12);
  }, []);
  const listenForChange = (e) => {
    console.log(e.target);
  };

  const countHandler = (e) => {
    if (counter < 14) countUp();
  };

  const clickToAnswerHandler = (e) => {
    e.preventDefault();
    if (
      replaceHTMLEntities(e.target.textContent) ===
      replaceHTMLEntities(quizz[counter].correct_answer)
    ) {
      setScore((state) => score + 1);
    }
    console.log(e.target.textContent);
    countUp();
  };

  return (
    <div className='container center'>
      <h1>Quizz</h1>
      <p>question {counter + 1}/15</p>
      <p>Score: {score}</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4 onChange={listenForChange}>
              {replaceHTMLEntities(quizz[counter]?.question)}
            </h4>
          </li>
          {answers?.length > 0 &&
            randomizeArray(
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
      )}
      <button onClick={countHandler}>Next</button>
    </div>
  );
};

export default Quizz;
