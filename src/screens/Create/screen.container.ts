import { State, StateProps, DispatchProps, Create } from './screen.component';
import { Dispatch, Action } from 'redux';
import restaurantFormUpdate from '../../actions/restaurantFormUpdate';
import { connect } from 'react-redux';
import createReview from '../../actions/restaurantCreate';

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (state: State): StateProps => {
  return {
    restaurantForm: state.restaurantForm
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    restaurantFormUpdate: props => dispatch(restaurantFormUpdate(props)),
    createReview: props => dispatch(createReview(props, ownProps.componentId))
    //formReset: () => dispatch({ type: 'restaurant_form_after_create' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
