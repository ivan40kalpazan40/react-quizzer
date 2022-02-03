import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { replaceHTMLEntities, randomizeArray } from '../../config/util.config';

const Quizz = () => {
  const { id, difficulty } = useParams();
  const [quizz, setQuizz] = useState([]);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=15&category=${id}&difficulty=${difficulty}`
    )
      .then((res) => res.json())
      .then((response) => {
        setQuizz(response.results);
        setAnswers((state) => [
          ...response.results[0].incorrect_answers,
          response.results[0].correct_answer,
        ]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, []);
  const listenForChange = (e) => {
    console.log(e.target);
  };

  const countUp = (e) => {
    setCounter((state) => counter + 1);
  };
  return (
    <div className='container center'>
      <h1>Quizz</h1>
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
                {replaceHTMLEntities(answer)}
              </li>
            ))}
        </ul>
      )}
      <button onClick={countUp}>Next</button>
    </div>
  );
};

export default Quizz;
