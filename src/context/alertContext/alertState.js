import { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { v4 as uuidv4 } from 'uuid';

const AlertStateProvider = (props) => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);
  // set alert
  const setAlert = (message, type) => {
    const id = uuidv4();
    dispatch({ type: 'SET_ALERT', payload: { message, type, id } });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT', payload: id });
    }, 4500);
  };

  return (
    <AlertContext.Provider value={{ alerts: state.alerts, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertStateProvider;
