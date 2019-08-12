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
  formReset: () => void;
}

interface OwnProps {
  componentId: string;
}

type Props = StateProps & DispatchProps & State & OwnProps;

export class Create extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.createReview = this.createReview.bind(this);
    this.moveHome = this.moveHome.bind(this);
  }

  moveHome() {
    this.props.formReset();
    Navigation.push(this.props.componentId, {
      component: {
        name: 'HomeScreen'
      }
    });
  }

  createReview() {
    const { name, station, comment } = this.props.restaurantForm;
    //this.props.restaurantCreate({ name, station, comment });

    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, station, comment })
    }).then(this.moveHome);
  }

  render() {
    const { name, station, comment } = this.props.restaurantForm;

    return (
      <Fragment>
        <RestaurantForm {...this.props} />
        {/* <Input
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
          //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        /> */}

        <Button
          title="create a review"
          onPress={() => {
            //console.log('fafkuyds');
            this.createReview();
          }}
        />
      </Fragment>
    );
  }
}
