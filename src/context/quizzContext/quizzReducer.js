import {} from '../types';
const quizzReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUIZZ':
      return { ...state, quizz: action.payload };
    case 'GET_INFO':
      return { ...state, info: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SCORE_UP':
      return { ...state, score: state.score + 1 };
    case 'RESET_SCORE':
      return { ...state, score: 0 };
    case 'COUNT_UP':
      return { ...state, counter: state.counter + 1 };
    case 'COUNTER_RESET':
      return { ...state, counter: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default quizzReducer;
