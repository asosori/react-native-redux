import { connect } from 'react-redux';
import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import RestaurantForm from '../RestaurantForm';
import { Dispatch, Action } from 'redux';
import restaurantFormUpdate from '../../actions/restaurantFormUpdate';
import restaurantSave from '../../actions/restaurantSave';
import _ from 'lodash';

export interface Props {
  restaurant: {
    name: string;
    station: string;
    comment: string;
  };
  restaurantSave: () => void;
  restaurantFormUpdate: (props: { prop: string; value: string }) => void;
}

class EditScreen extends Component<Props> {
  // onPressUpdate(){
  //   this.props.restaurantSave();
  // }
  constructor(props: Props) {
    super(props);
    _.each(this.props.restaurant, (value, prop) => {
      this.props.restaurantFormUpdate({ prop, value });
    });
  }

  render() {
    return (
      <Fragment>
        <RestaurantForm {...this.props} />
        {/* <Input value={this.props.restaurant.name} placeholder="お店の名前" />

        <Input value={this.props.restaurant.station} placeholder="最寄駅" />

        <Input value={this.props.restaurant.comment} placeholder="コメント" /> */}

        <Button title="更新する" onPress={() => this.props.restaurantSave()} />
      </Fragment>
    );
  }
}

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
