import {} from '../types';
const quizzReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUIZZ':
      return { ...state, quizz: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'COUNT_UP':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export default quizzReducer;
