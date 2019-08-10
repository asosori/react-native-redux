import { combineReducers } from 'redux';
import restaurantFormReducer from './restaurantFormReducer';
import restaurantListReducer from './restaurantListReducer';

export default combineReducers({
  restaurantForm: restaurantFormReducer,
  restaurantList: restaurantListReducer
});