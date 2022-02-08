import { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertStateProvider = (props) => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);
  // set alert
  const setAlert = (message, type) => {
    dispatch({ type: 'SET_ALERT', payload: { message, type } });
  };

  return (
    <AlertContext.Provider value={{ alerts: state.alerts, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertStateProvider;
