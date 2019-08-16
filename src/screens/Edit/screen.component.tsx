import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import RestaurantForm from '../RestaurantForm';
import _ from 'lodash';

export interface otherProps {
  restaurant: {
    id: number;
    name: string;
    station: string;
    comment: string;
  };
  componentId: string;
}

export interface StateProps {
  restaurantForm: { name: string; station: string; comment: string };
}

export interface DispatchProps {
  restaurantSave: (
    props: {
      name: string;
      station: string;
      comment: string;
    },
    restaurantId: number,
    componentId: string
  ) => void;
  restaurantFormUpdate: (props: {
    name: string;
    station: string;
    comment: string;
  }) => void;
}

type Props = otherProps & StateProps & DispatchProps;

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
    const { name, station, comment } = this.props.restaurantForm;
    const restaurantId = this.props.restaurant.id;
    const componentId = this.props.componentId;

    return (
      <Fragment>
        <RestaurantForm {...this.props} />

        <Button
          title="更新する"
          onPress={() =>
            this.props.restaurantSave(
              { name, station, comment },
              restaurantId,
              componentId
            )
          }
        />
      </Fragment>
    );
  }
}
