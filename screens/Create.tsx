import React, { Fragment, Component } from 'React';
import { Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

interface Props {}

export default class Create extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.createReview = this.createReview.bind(this);
  }

  createReview() {
    console.log('gfffwas');
    // const { place, station, comment } = this.props.restaurantForm;
    // this.props.createReview({ place, station, comment });
  }

  render() {
    return (
      <Fragment>
        <Input placeholder="場所" />

        <Input placeholder="最寄駅" shake />

        <Input
          placeholder="コメント"
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
