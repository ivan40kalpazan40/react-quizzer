import { useReducer } from 'react';
import QuizzContext from './quizzContext';
import quizzReducer from './quizzReducer';

import {
  getQuizzByCategoryAndDifficulty,
  getCategoryInfoById,
} from '../../services/apiServices';

const QuizzStateProvider = (props) => {
  const initialState = {
    quizz: [],
    loading: true,
    counter: 0,
    score: 0,
    info: {},
  };
  const [state, dispatch] = useReducer(quizzReducer, initialState);

  // GET QIUZZ
  const getQuizz = async (id, difficulty, amount) => {
    try {
      const quizz = await getQuizzByCategoryAndDifficulty(
        id,
        difficulty,
        amount
      );
      dispatch({ type: 'GET_QUIZZ', payload: quizz.results });
      console.log(`From State `, quizz.results);
      setLoading();
    } catch (err) {
      console.log(err.message);
      setLoading();
    }
  };

  // GET INFO
  const getInfo = async (id) => {
    try {
      const response = await getCategoryInfoById(id);
      const info = await response.category_question_count;
      setLoading();
      console.log(`From state: `, info);
      dispatch({ type: 'GET_INFO', payload: info });
    } catch (err) {
      console.error(err.message);
      setLoading();
    }
  };

  // SET LOADING
  const setLoading = () => {
    console.log('Loading is set to false');
    dispatch({ type: 'SET_LOADING' });
  };

  // Iterate Score

  const scoreUp = () => {
    console.log(`From STATE Score UP`);
    dispatch({ type: 'SCORE_UP' });
  };

  // Iterate Counter
  const countUp = () => {
    console.log(`From STATE Count UP `);
    dispatch({ type: 'COUNT_UP' });
  };

  // Reset Counter
  const resetCounter = () => {
    console.log('RESET COUNTER ');
    dispatch({ type: 'COUNTER_RESET', payload: 0 });
  };

  return (
    <QuizzContext.Provider
      value={{
        quizz: state.quizz,
        loading: state.loading,
        counter: state.counter,
        score: state.score,
        info: state.info,
        countUp,
        scoreUp,
        resetCounter,
        getQuizz,
        getInfo,
      }}
    >
      {props.children}
    </QuizzContext.Provider>
  );
};

export default QuizzStateProvider;
