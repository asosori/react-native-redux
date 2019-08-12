import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import restaurantFetch from '../../actions/restaurantFetch';
import HomeScreen from './screen.component';

const mapStateToProps = (state: any) => {
  return { restaurantList: state.restaurantList };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    restaurantFetch: () => {
      fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(json => {
          //console.log(json);
          dispatch(restaurantFetch(json)); //this.setState({ tasks: json })
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
