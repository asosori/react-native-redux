import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import EditScreen from './screen.component';
import restaurantFormUpdate from '../../actions/restaurantFormUpdate';
import restaurantSave from '../../actions/restaurantSave';
import restaurantDelete from '../../actions/restaurantDelete';
import { StateProps, DispatchProps } from './screen.component';

const mapStateToProps = (state: any): StateProps => {
  return { restaurantForm: state.restaurantForm };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    restaurantSave: (props, restaurantId, componentId) =>
      dispatch(restaurantSave(props, restaurantId, componentId)),
    restaurantFormUpdate: props => dispatch(restaurantFormUpdate(props)),
    restaurantDelete: (restaurantId, componentId) =>
      dispatch(restaurantDelete(restaurantId, componentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreen);
