import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';
import { Input } from 'react-native-elements';
// import { connect } from 'react-redux';
// import restaurantFormUpdate from '../actions/restaurantFormUpdate';
// import { Dispatch, Action } from 'redux';

// interface State {
//   restaurantForm: { name: string; station: string; comment: string };
// }

interface StateProps {
  restaurantForm: { name: string; station: string; comment: string };
}

interface DispatchProp {
  restaurantFormUpdate: (props: { prop: string; value: string }) => void;
}

type Props = DispatchProp & StateProps;

export default class RestaurantForm extends Component<Props> {
  render() {
    const { name, station, comment } = this.props.restaurantForm;

    return (
      <Fragment>
        <Text>vino</Text>
        <Input
          placeholder="お店の名前"
          value={name}
          onChangeText={text =>
            this.props.restaurantFormUpdate({ prop: 'name', value: text })
          }
        />

        <Input
          placeholder="最寄駅"
          value={station}
          onChangeText={text =>
            this.props.restaurantFormUpdate({ prop: 'station', value: text })
          }
        />

        <Input
          placeholder="コメント"
          value={comment}
          onChangeText={text =>
            this.props.restaurantFormUpdate({ prop: 'comment', value: text })
          }
        />
      </Fragment>
    );
  }
}

// const mapStateToProps = (state: State): StateProps => {
//   return {
//     restaurantForm: state.restaurantForm
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
//   return {
//     restaurantFormUpdate: props => dispatch(restaurantFormUpdate(props))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RestaurantForm);
