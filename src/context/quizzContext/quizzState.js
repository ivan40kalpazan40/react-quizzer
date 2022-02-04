import { useReducer } from 'react';
import QuizzContext from './quizzContext';
import quizzReducer from './quizzReducer';

import { getQuizzByCategoryAndDifficulty } from '../../services/apiServices';

const QuizzStateProvider = (props) => {
  const initialState = {
    quizz: [],
    loading: true,
    counter: 0,
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

      // dispatch to reducer
      dispatch({ type: 'GET_QUIZZ', payload: quizz.results });
      console.log(`From State `, quizz.results);
      setLoading();
    } catch (err) {
      console.log(err.message);
      setLoading();
    }
  };

  // SET LOADING
  const setLoading = () => {
    console.log('Loading is set to false');
    dispatch({ type: 'SET_LOADING' });
  };

  // Iterate Counter
  const countUp = () => {
    console.log(`From STATE Count UP `);
    dispatch({ type: 'COUNT_UP' });
  };

  return (
    <QuizzContext.Provider
      value={{
        quizz: state.quizz,
        loading: state.loading,
        counter: state.counter,
        countUp,
        getQuizz,
      }}
    >
      {props.children}
    </QuizzContext.Provider>
  );
};

export default QuizzStateProvider;
