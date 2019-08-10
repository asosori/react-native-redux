import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';

export interface StateProps {
  restaurantForm: {
    name: string;
    station: string;
    comment: string;
  };
}

export interface DispatchProps {
  restaurantFormUpdate: (props: { prop: string; value: string }) => void;
}

interface OwnProps {
  componentId: string;
}

type Props = StateProps & DispatchProps & OwnProps;

export class Create extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.createReview = this.createReview.bind(this);
  }

  createReview() {
    //console.log('gfffwas');
    //const { name, station, comment } = this.props.restaurantForm;
    //this.props.createReview({ name, station, comment });
  }

  render() {
    const { name, station, comment } = this.props.restaurantForm;

    return (
      <Fragment>
        <Input
          placeholder="店の名前"
          value={name}
          onChangeText={text => console.log(this.props.restaurantFormUpdate)}
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
        />

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
