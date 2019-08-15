import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import RestaurantForm from '../RestaurantForm';
import _ from 'lodash';

export interface Props {
  restaurant: {
    name: string;
    station: string;
    comment: string;
  };
  restaurantSave: () => void;
  restaurantFormUpdate: (props: { prop: string; value: string }) => void;
  componentId: string;
}

export default class EditScreen extends Component<Props> {
  static options() {
    return {
      topBar: {
        leftButtons: {
          id: 'button1',
          text: 'ホームへ'
        }
      }
    };
  }
  // onPressUpdate(){
  //   this.props.restaurantSave();
  // }
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    _.each(this.props.restaurant, (value, prop) => {
      this.props.restaurantFormUpdate({ prop, value });
    });
  }

  navigationButtonPressed() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'HomeScreen'
      }
    });
  }

  render() {
    return (
      <Fragment>
        <RestaurantForm {...this.props} />

        <Button title="更新する" onPress={() => this.props.restaurantSave()} />
      </Fragment>
    );
  }
}
