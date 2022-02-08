export default (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return { ...state, alerts: [...state.alerts, action.payload] };
    default:
      return state;
  }
};
