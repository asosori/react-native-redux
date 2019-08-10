import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import restaurantFetch from '../../actions/restaurantFetch';
import HomeScreen from './screen.component';

const mapStateToProps = (state: any) => {
  return { restaurantlist: state.restaurantList };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return { restaurantFetch: () => dispatch(restaurantFetch()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
