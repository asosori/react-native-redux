import { StateProps, DispatchProps, Create } from './screen.component';
import { Dispatch, Action } from 'redux';
import restaurantFormUpdate from '../../actions/restaurantFormUpdate';
import { connect } from 'react-redux';

const mapStateToProps = (state: any): StateProps => {
  return {
    restaurantForm: state.restaurantForm
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    restaurantFormUpdate: props => dispatch(restaurantFormUpdate(props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
