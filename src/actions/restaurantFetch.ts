export default (data: any) => {
  return { type: 'restaurant_fetch', payload: data };
};

// import { Dispatch, Action } from 'redux';

// export default () => {
//   return (dispatch: Dispatch<Action>) => {
//     fetch('http://localhost:3001/restaurants')
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: 'restaurant_fetch', payload: json });
//       });
//   };
// };
