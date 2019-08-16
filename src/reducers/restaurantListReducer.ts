const initial_state = {};

export default (
  state = initial_state,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'restaurant_fetch':
      return action.payload;
    default:
      return state;
  }
};
