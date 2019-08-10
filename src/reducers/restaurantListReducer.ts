const initial_state = {};

export default (
  state = initial_state,
  action: { type: string; payload: string }
) => {
  console.log(action);
  switch (action.type) {
    case 'restaurant_fetch':
      console.log('fetc');
      return action.payload;
    default:
      console.log('default');
      return state;
  }
};
