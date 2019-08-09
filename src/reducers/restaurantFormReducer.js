// const restaurantFormReducer = (state = initial_state, action) => {
//   switch (action.type){
//     case "restaurant_form_update":
//       return (
//         { ...state, [action.payload.prop]: action.payload.value }
//       )
//     default:
//       return state
//     }
// }

// export default restaurantFormReducer;

const initial_state = { name: "", station: "", comment: "" };

export default (state = initial_state, action) => {
  switch (action.type){
    case "restaurant_form_update":
      return {...state, [action.payload.prop]: action.payload.value}
    default :
      return state
  }
}