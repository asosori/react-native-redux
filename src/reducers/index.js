import { combineReducers } from 'redux';
import restaurantFormReducer from './restaurantFormReducer';

export default combineReducers({
  //banana: () => []
  restaurantForm: restaurantFormReducer
});