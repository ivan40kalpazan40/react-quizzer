import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import QuizzContext from '../../context/quizzContext/quizzContext';
import AuthContext from '../../context/authContext/authContext';
import { evaluateScore, formatScore } from '../../config/util.config';

const Results = () => {
  const { score, counter } = useContext(QuizzContext);
  const { user } = useContext(AuthContext);
  const [showScore, setShowScore] = useState(false);
  const [totalScore, setTotalScore] = useState(user.totalScore);
  const [totalTests, setTotalTests] = useState(user.testsTaken);

  const submitScoreHandler = (e) => {
    fetch(`/quizz/add_result/${user._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentTestScore: Number(formatScore(score, counter)),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalScore(data.totalScore);
        setTotalTests(data.testsTaken);
      });
    setShowScore(true);
  };

  return (
    <div className='container center'>
      <h1>{evaluateScore(Number(formatScore(score, counter)))}</h1>
      <p>You answered {score} qusetions correctly</p>
      <p>Your test score is: {formatScore(score, counter)} %</p>
      {showScore ? (
        <>
          <p>Your overall score is {Math.round(totalScore)} points</p>
          <p>You have taken {totalTests} tests so far!</p>
        </>
      ) : (
        <p>Click "Save Score" button and see your total score</p>
      )}

      <Link to='/categories'>Play another quizz</Link>
      {showScore ? (
        ''
      ) : (
        <p>
          <button onClick={submitScoreHandler}>Save Score</button>
        </p>
      )}
    </div>
  );
};

export default Results;
