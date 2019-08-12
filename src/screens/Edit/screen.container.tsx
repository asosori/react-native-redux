import { connect } from 'react-redux';
import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import RestaurantForm from '../RestaurantForm';
import { Dispatch, Action } from 'redux';
// import restaurantUpdate from ''

export interface Props {
  restaurant: {
    name: string;
    station: string;
    comment: string;
  };
  //restaurantUpdate:
}

export default class EditScreen extends Component<Props> {
  // onPressUpdate(){
  //   this.props.restaurantUpdate();
  // }

  render() {
    return (
      <Fragment>
        <Input value={this.props.restaurant.name} placeholder="お店の名前" />

        <Input value={this.props.restaurant.station} placeholder="最寄駅" />

        <Input value={this.props.restaurant.comment} placeholder="コメント" />

        <Button
          title="更新する"
          onPress={() => console.log('pushed the update button')}
        />
      </Fragment>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   return { restaurantForm: state.restaurantForm };
// };

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return { restaurantUpdate: () => dispatch(restaurantUpdate()) };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditScreen);
