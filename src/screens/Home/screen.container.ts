import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import restaurantFetch from '../../actions/restaurantFetch';
import HomeScreen from './screen.component';
import { State, StateProps, DispatchProps } from './screen.component';

const mapStateToProps = (state: State): StateProps => {
  return { restaurantList: state.restaurantList };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    restaurantFetch: () => {
      fetch('http://localhost:3001/restaurants')
        .then(response => response.json())
        .then(json => {
          dispatch(restaurantFetch(json));
        });
    },
    formReset: () => dispatch({ type: 'restaurant_form_after_create' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
