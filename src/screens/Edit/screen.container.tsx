import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import EditScreen from './screen.component';
import restaurantFormUpdate from '../../actions/restaurantFormUpdate';
import restaurantSave from '../../actions/restaurantSave';

const mapStateToProps = (state: any) => {
  return { restaurantForm: state.restaurantForm };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    restaurantSave: () => restaurantSave(),
    restaurantFormUpdate: (props: { prop: string; value: string }) =>
      dispatch(restaurantFormUpdate(props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreen);
