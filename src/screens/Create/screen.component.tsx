import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import RestaurantForm from '../RestaurantForm';

export interface StateProps {
  restaurantForm: {
    name: string;
    station: string;
    comment: string;
  };
}

export interface State {
  restaurantForm: {
    name: string;
    station: string;
    comment: string;
  };
}

export interface DispatchProps {
  restaurantFormUpdate: (props: { prop: string; value: string }) => void;
  createReview: (props: {
    name: string;
    station: string;
    comment: string;
  }) => void;
}

interface OwnProps {
  componentId: string;
}

type Props = StateProps & DispatchProps & State & OwnProps;

export class Create extends Component<Props> {
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

    return (
      <Fragment>
        <RestaurantForm {...this.props} />

        <Button
          title="create a review"
          onPress={() => {
            this.props.createReview({ name, station, comment });
          }}
        />
      </Fragment>
    );
  }
}
