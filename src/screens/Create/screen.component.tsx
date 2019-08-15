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
  createReview: (
    props: {
      name: string;
      station: string;
      comment: string;
    },
    componentId: string
  ) => void;
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
    //this.createReview = this.createReview.bind(this);
    //this.moveHome = this.moveHome.bind(this);
  }

  navigationButtonPressed() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'HomeScreen'
      }
    });
    //console.log(buttonId);
  }

  // moveHome() {
  //   //this.props.formReset();
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'HomeScreen'
  //     }
  //   });
  // }

  // createReview() {
  //   const { name, station, comment } = this.props.restaurantForm;

  //   fetch('http://localhost:3001/tasks', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ name, station, comment })
  //   }).then(this.moveHome);
  // }

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
            //console.log(this.props.componentId);
            this.props.createReview(
              { name, station, comment },
              this.props.componentId
            );
          }}
        />
      </Fragment>
    );
  }
}
